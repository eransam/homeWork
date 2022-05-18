import { Router } from '@angular/router';
import { UserModel } from './../../../models/user.model';
import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { NotifyService } from 'src/app/services/notify.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent {

    public user = new UserModel();

    constructor(private authService: AuthService, private notify: NotifyService, private router: Router) { }

    public async submit() {
        try {
            await this.authService.register(this.user);
            this.notify.success("You have been registered");
            this.router.navigateByUrl("/home");
        }
        catch(err: any) {
            this.notify.error(err);
        }
    }

}
