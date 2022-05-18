import { CredentialsModel } from './../models/credentials.model';
import { firstValueFrom } from 'rxjs';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';
import store from '../redux/store';
import { loginAction, logoutAction, registerAction } from '../redux/auth-state';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient) { }

    public async register(user: UserModel): Promise<void> {
        const token = await firstValueFrom(this.http.post<string>(environment.registerUrl, user));
        store.dispatch(registerAction(token));
    }

    public async login(credentials: CredentialsModel): Promise<void> {
        const token = await firstValueFrom(this.http.post<string>(environment.loginUrl, credentials));
        store.dispatch(loginAction(token));
    }

    public logout(): void {
        store.dispatch(logoutAction());
    }
    
}
