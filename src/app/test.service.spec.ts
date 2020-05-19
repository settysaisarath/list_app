import { TestBed,async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TestService } from './test.service';

describe('TestService', () => {
  let service: TestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});


describe('testing array',() =>{

  let ref:AppComponent;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
  it('should add the element to the array',() =>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const todo={label: 'Todo app',
    done:false,
    };
      expect(app.addTodo(todo,5)).toBe(6);

  });

  it('should remove the element from the array',() =>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const todo={label: 'Todo app',
    done:false,
    priority:3};
    expect(app.deleteTodo(todo)).toBe(4);

  });

  });
