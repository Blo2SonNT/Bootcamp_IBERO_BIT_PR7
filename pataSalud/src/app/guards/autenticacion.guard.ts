import { inject } from '@angular/core';
import { CanMatchFn } from '@angular/router';
import { PatasaludAPIService } from '../services/patasalud-api.service';

export const autenticacionGuard: CanMatchFn = (route, segments) => {
    const pataSaludService = inject(PatasaludAPIService)
    return pataSaludService.estaLogueado()
};
