import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'sample'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('sample');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('sample app is running!');
  });
});



// describe('testing array',() =>{

//   let ref:AppComponent;
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [
//         AppComponent
//       ],
//     }).compileComponents();
//   }));
//   it('should add the element to the array',() =>{
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.componentInstance;
//     const todo={label: 'Todo app',
//     done:false,
//     };
//       expect(app.addTodo(todo,5)).toBe(6);

//   });

//   it('should remove the element from the array',() =>{
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.componentInstance;
//     const todo={label: 'Todo app',
//     done:false,
//     priority:3};
//     expect(app.deleteTodo(todo)).toBe(4);

//   });

//   });
