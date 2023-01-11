import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { TableComponentComponent } from './table-component.component';

const testData = [
  { "position": 0, "bitStream": '010101010' },
  { "position": 1, "bitStream": '111111111' },
  { "position": 2, "bitStream": '111111110' },
];

describe('TableComponentComponent', () => {
  let component: TableComponentComponent;
  let fixture: ComponentFixture<TableComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableComponentComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA]
    })
    
      .compileComponents();

    fixture = TestBed.createComponent(TableComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show TEST INPUT', () => {
    component.dataSource = [{ "position": 0, "bitStream": '010101010' }];
    fixture.detectChanges();
    expect(component.dataSource).toEqual([{ "position": 0, "bitStream": '010101010' }])
  });

//     it('should test the table ', (done) => {
//       const testData = [
//   { "position": 0, "bitStream": '010101010' },
//   { "position": 1, "bitStream": '111111111' },
//   { "position": 2, "bitStream": '111111110' },
// ];
//       expect(component.dataSource).toEqual(testData);

//       fixture.detectChanges();
//       fixture.whenStable().then(() => {
//         fixture.detectChanges();

//         let tableRows = fixture.nativeElement.querySelectorAll('tr');
//         // expect(tableRows.length).toBe(3);

//         // Header row
//         let headerRow = tableRows[0];
//         expect(headerRow.cells[0].innerHTML).toBe('position');
//         expect(headerRow.cells[1].innerHTML).toBe('bitStream');


//         // Data rows
//         let row1 = tableRows[1];
//         expect(row1.cells[0].innerHTML).toBe('0');
//         expect(row1.cells[1].innerHTML).toBe('010101010');
//         done();
//       });
//     });
  });

