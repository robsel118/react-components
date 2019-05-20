import React from 'react';
import {
    SubTitle,
    Row,
    Field,
    Label,
    useModals,
    useMailSettings,
    useEventManager,
    useApiWithoutResult,
    Alert
} from 'react-components';
import { updateAutoresponder } from 'proton-shared/lib/api/mailSettings';
import { c } from 'ttag';
import AutoReplyModal from './AutoReplyModal';
import AutoReplyToggle from './AutoReplyToggle';
import AutoReplyTemplate from './AutoReplyTemplate';

const AutoReplySection = () => {
    const { createModal } = useModals();
    const [{ AutoResponder }] = useMailSettings();
    const { call } = useEventManager();
    const { request } = useApiWithoutResult(updateAutoresponder);

    const toggleEnabled = async () => {
        await request({ ...AutoResponder, IsEnabled: !AutoResponder.IsEnabled });
        call();
    };

    const handleOpenModal = () => {
        createModal(<AutoReplyModal />);
    };

    return (
        <>
            <div className="p1">
                <SubTitle>{c('Title').t`Auto-reply`}</SubTitle>
                <Alert className="mt1 mb1" learnMore="https://protonmail.com/support/knowledge-base/autoresponder/">
                    {c('Info')
                        .t`Automatic replies can respond automatically to incoming messages (such as when you are on vacation and can't respond).`}
                </Alert>

                <Row>
                    <Label htmlFor="autoReplyToggle" className="flex-item-centered-vert">{c('Label')
                        .t`Auto-reply`}</Label>
                    <Field>
                        <AutoReplyToggle
                            id="autoReplyToggle"
                            onToggle={toggleEnabled}
                            enabled={AutoResponder.IsEnabled}
                        />
                    </Field>
                </Row>

                {AutoResponder.IsEnabled && (
                    <AutoReplyTemplate autoresponder={AutoResponder} onEdit={handleOpenModal} />
                )}
            </div>
        </>
    );
};

export default AutoReplySection;