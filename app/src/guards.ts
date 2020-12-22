import { NavigationGuard } from 'vue-router'

const signed = false;

export const isLoggedOut: NavigationGuard = (to, from, next) => {
  if (!signed) {
    return next();
  }
  next("/workbench");
  return !signed;
};

export const isLoggedIn: NavigationGuard = (to, from, next) => {
  if (signed) {
    return next();
  }
  next("/sign-in");
  return signed;
};
