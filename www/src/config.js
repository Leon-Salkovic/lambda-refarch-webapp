// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"


const config = {
  "aws_user_pools_web_client_id": "60ni9rgca5i123k7o3nurrkbc",     // CognitoClientID
  "api_base_url": "https://7tcl1uzbd5.execute-api.eu-central-1.amazonaws.com/Stage",                                     // TodoFunctionApi
  "cognito_hosted_domain": "http://mytodoappdemo-lcslambdareact3.auth.eu-central-1.amazoncognito.com/",                   // CognitoDomainName
  "redirect_url": "https://localhost:8080"                                      // AmplifyURL
};

export default config;
