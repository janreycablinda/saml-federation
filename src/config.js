config = {
    service: {
        port: 3000
    },
    auth: {
        clientId: 'fv2s5o78ht96bt6ihpiqp3s4l',
        redirectUri: 'http://localhost:3000/authcode',// change the port if you are changing the value above
        cognitoLoginUrl: 'salesenablementcollective.auth.eu-west-2.amazoncognito.com'
    },
    apiGateway: {
        endPointUri: 'f1lcjvbgi8.execute-api.eu-west-2.amazonaws.com',
        stage: 'prod',
    }
};

module.exports = { config };