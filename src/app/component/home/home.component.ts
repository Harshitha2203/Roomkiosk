import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // Define columns to display in the table
  displayedColumns: string[] = ['name', 'age', 'role'];

  // Data for the table
  dataSource = new MatTableDataSource([
    { name: 'John Doe', age: 30, role: 'Admin' },
    { name: 'Jane Smith', age: 25, role: 'User' },
    { name: 'Alice Johnson', age: 40, role: 'Manager' },
    { name: 'Bob Brown', age: 35, role: 'Support' },
  ]);

  // Filtered data to display
  filteredData = this.dataSource.data;

  ngOnInit(): void {}

  // Apply filter on search
  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.filteredData = this.dataSource.data.filter((item: { name: string; }) =>
      item.name.toLowerCase().includes(filterValue)
    );
  }
}
