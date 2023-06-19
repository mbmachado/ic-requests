import { inject, ElementRef } from '@angular/core';
import { TabButtonDirective } from './tab-button.directive';

describe('TabButtonDirective', () => {
  it('should create an instance', () => {
    const directive = new TabButtonDirective(inject(ElementRef));
    expect(directive).toBeTruthy();
  });
});
