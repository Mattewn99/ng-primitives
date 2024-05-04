/**
 * Copyright © 2024 Angular Primitives.
 * https://github.com/ng-primitives/ng-primitives
 *
 * This source code is licensed under the CC BY-ND 4.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { InjectionToken, inject } from '@angular/core';
import type { NgpSelectButtonDirective } from './select-button.directive';

export const NgpSelectButtonToken = new InjectionToken<NgpSelectButtonDirective>(
  'NgpSelectButtonToken',
);

/**
 * Inject the SelectButton directive instance
 */
export function injectSelectButton(): NgpSelectButtonDirective {
  return inject(NgpSelectButtonToken);
}
