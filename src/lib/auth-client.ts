import { createAuthClient } from "better-auth/client";

export const { 
    signIn, 
    signUp, 
    signOut, 
    useSession,
    accountInfo,
    changePassword,
    forgetPassword,
    getAccessToken,
    requestPasswordReset,
    resetPassword,
    sendVerificationEmail,
} = createAuthClient({
    baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000",
});