import React from 'react';

import CloudIcon from '../../Icons/Cloud';
import ServerIcon from '../../Icons/Server';
import WebIcon from '../../Icons/Web';
import MobileIcon from '../../Icons/Mobile';
import RobotIcon from '../../Icons/Robot';

const competencies = [{
  text: 'Cloud',
  icon: <CloudIcon />,
  items: [{
    text: 'AWS',
  }, {
    text: 'Kinesis',
  }, {
    text: 'SNS',
  }, {
    text: 'SQS',
  }, {
    text: 'Step Functions',
  }, {
    text: 'EC2',
  }, {
    text: 'EB',
  }, {
    text: 'Lambda',
  }, {
    text: 'ECR',
  }, {
    text: 'ECS',
  }, {
    text: 'Dynamo',
  }, {
    text: 'ElastiCache',
  }, {
    text: 'RDS',
  }, {
    text: 'CodeBuild',
  }, {
    text: 'Amplify',
  }, {
    text: 'AppSync',
  }, {
    text: 'Device Farm',
  }, {
    text: 'IoT',
  }, {
    text: 'Comprehend',
  }, {
    text: 'DeepLens',
  }, {
    text: 'Lex',
  }, {
    text: 'Polly',
  }, {
    text: 'Rekognition',
  }, {
    text: 'SageMaker',
  }, {
    text: 'Textract',
  }, {
    text: 'Transcribe',
  }, {
    text: 'Cloudformation',
  }, {
    text: 'API Gateway',
  }, {
    text: 'Cloudfront',
  }, {
    text: 'Route53',
  }, {
    text: 'VPC',
  }, {
    text: 'Cognito',
  }, {
    text: 'IAM',
  }, {
    text: 'KMS',
  }, {
    text: 'EFS',
  }, {
    text: 'S3',
  }, {
    text: 'more...',
  }],
}, {
  text: 'Server',
  icon: <ServerIcon />,
  items: [{
    text: 'Node',
  }, {
    text: 'Python',
  }, {
    text: 'PHP',
  }, {
    text: 'more...',
  }],
}, {
  text: 'Web',
  icon: <WebIcon />,
  items: [{
    text: 'Javascript',
  }, {
    text: 'HTML',
  }, {
    text: 'CSS',
  }, {
    text: 'React',
  }, {
    text: 'JQuery',
  }, {
    text: 'more...',
  }],
}, {
  text: 'Mobile',
  icon: <MobileIcon />,
  items: [{
    text: 'React Native',
  }, {
    text: 'Android',
  }, {
    text: 'IOS',
  }, {
    text: 'Unity',
  }, {
    text: 'more...',
  }],
}, {
  text: 'AI / ML',
  icon: <RobotIcon />,
  items: [{
    text: 'Tensorflow',
  }, {
    text: 'Lex',
  }, {
    text: 'Dialog Flow',
  }, {
    text: 'Watson',
  }, {
    text: 'more...',
  }],
}];

export default competencies;
