import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from '../../../auth.config'; // Adjust the path if necessary

export default NextAuth(authConfig);