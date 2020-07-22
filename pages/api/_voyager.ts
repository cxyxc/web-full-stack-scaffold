import { express as voyagerMiddleware } from 'graphql-voyager/middleware';

export default voyagerMiddleware({ endpointUrl: '/api' });
