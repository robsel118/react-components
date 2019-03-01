import React, { useContext } from 'react';
import { c } from 'ttag';
import { connect } from 'react-redux';
import { SubTitle, Alert, LearnMore, Row, Label, SmallButton, useModal, InputModal } from 'react-components';
import ContextApi from 'proton-shared/lib/context/api';
import { updateOrganizationName } from 'proton-shared/lib/api/organization';

const OrganizationSection = ({ organization }) => {
    const { api } = useContext(ContextApi);
    const { isOpen, open, close } = useModal();
    const { Name = '' } = organization.data;
    const handleSubmit = (name) => async () => {
        await api(updateOrganizationName(name));
        close();
    };

    return (
        <>
            <SubTitle>{c('Title').t`Organization`}</SubTitle>
            <Alert>
                {c('Info').t`Lorem ipsum`}
                <br />
                <LearnMore url="todo" />
            </Alert>
            <Row>
                <Label>{c('Label').t`Organization name`}</Label>
                <div>
                    <span className="pm-label mr1">{Name}</span>
                    <SmallButton onClick={open}>{c('Action').t`Edit`}</SmallButton>
                    <InputModal
                        show={isOpen}
                        input={Name}
                        title={c('Title').t`Change organization name`}
                        label={c('Label').t`Organization name`}
                        placeholder={c('Placeholder').t`Choose a name`}
                        onClose={close}
                        onSubmit={handleSubmit} />
                </div>
            </Row>
        </>
    );
};

const mapStateToProps = ({ organization }) => ({ organization });

export default connect(mapStateToProps)(OrganizationSection);