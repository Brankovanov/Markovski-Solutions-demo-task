import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})

export class ButtonComponent implements OnInit {
  @Input() text!: string;
  @Input() btnDelete!:string;
  @Input() btnSubmit!:string;
  @Input() btnCancel!:string;
  @Input() datatoggle!:string;
  @Input() datatarget!:string;
  @Input() datadismiss!:string;
  @Output() btnClick = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.btnClick.emit();
  }
}