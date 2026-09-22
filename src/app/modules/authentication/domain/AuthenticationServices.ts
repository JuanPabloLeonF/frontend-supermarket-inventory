export interface IAuthenticationServices {
    login(email: string, password: string): Promise<string>;
}