import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppEditorPage } from './editor.page';

describe('AppEditorPage', () => {
  let component: AppEditorPage;
  let fixture: ComponentFixture<AppEditorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppEditorPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppEditorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
