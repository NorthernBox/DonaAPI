import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from './role.enum';
import { ROLE_KEY } from './role.decorator';
import { UserHelper } from 'src/helper/user-helper';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private readonly userHelper: UserHelper,
  ) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLE_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requiredRoles) {
      return true;
    }
    const user = this.userHelper.getUser();
    return requiredRoles.some(
      (role) => role === user.role || user.role === 'SuperAdmin',
    );
  }
}
