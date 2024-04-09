import { useHubspotForm } from 'next-hubspot';

const HubspotBboy = () => {
    const { loaded, error, formCreated } = useHubspotForm({
        portalId: '43817859',
        formId: '139e76f3-c312-4fd2-8302-c384ef4d4780',
        target: '#hubspot-form-bboy'
    });

    return (
        <div id="hubspot-form-bboy" />
    )
}

export default HubspotBboy;

