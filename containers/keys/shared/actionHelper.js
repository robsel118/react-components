import { createKey, reactivateKey } from 'proton-shared/lib/keys/keysManager';
import { getKeyFlagsAddress, getKeyFlagsUser } from 'proton-shared/lib/keys/keyFlags';
import { createAddressKeyRoute, reactivateKeyRoute } from 'proton-shared/lib/api/keys';
import getSignedKeyList from 'proton-shared/lib/keys/getSignedKeyList';

/**
 * Add a private key to the list of address keys.
 * @param {Function} api
 * @param {Object} privateKey
 * @param {String} privateKeyArmored
 * @param {Array} keys
 * @param {Object} Address
 * @return {Promise<Array>} - The updated list of address keys
 */
export const createKeyHelper = async ({ api, privateKey, privateKeyArmored, keys, Address }) => {
    const updatedKeys = createKey({
        keyID: 'temp',
        keys,
        flags: getKeyFlagsAddress(Address, keys),
        privateKey
    });

    const createdKey = updatedKeys.find(({ Key: { ID } }) => ID === 'temp');
    const {
        Key: { Primary }
    } = createdKey;

    const { Key } = await api(
        createAddressKeyRoute({
            AddressID: Address.ID,
            Primary,
            PrivateKey: privateKeyArmored,
            SignedKeyList: await getSignedKeyList(updatedKeys)
        })
    );

    // Mutably update the key with the latest value from the API (sets the real ID etc).
    createdKey.Key = Key;

    return updatedKeys;
};

/**
 * Reactivate a private key in the address or user keys list.
 * @param {Function} api
 * @param {String} keyID
 * @param {Object} privateKey
 * @param {String} privateKeyArmored
 * @param {Array} keys
 * @param {Object} [Address]
 * @return {Promise<Array>} - The updated list of keys.
 */
export const reactivateKeyHelper = async ({ api, keyID, privateKey, privateKeyArmored, keys, Address }) => {
    const isAddressKey = !!Address;

    const updatedKeys = reactivateKey({
        keyID,
        keys,
        privateKey,
        flags: isAddressKey ? getKeyFlagsAddress(Address, keys) : getKeyFlagsUser()
    });

    await api(
        reactivateKeyRoute({
            ID: keyID,
            PrivateKey: privateKeyArmored,
            SignedKeyList: isAddressKey ? await getSignedKeyList(updatedKeys) : undefined
        })
    );

    return updatedKeys;
};
