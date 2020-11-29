import { Component, OnInit } from '@angular/core';
declare var $ :any;
@Component({
  selector: 'app-chatboat',
  templateUrl: './chatboat.component.html',
  styleUrls: ['./chatboat.component.css']
})
export class ChatboatComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
      //Toggle fullscreen
      $(".chat-bot-icon").click(function (e) {
        $(this).children('img').toggleClass('hide');
        $(this).children('svg').toggleClass('animate');
        $('.chat-screen').toggleClass('show-chat');
    });
    $('.chat-mail button').click(function () {
        $('.chat-mail').addClass('hide');
        $('.chat-body').removeClass('hide');
        $('.chat-input').removeClass('hide');
        $('.chat-header-option').removeClass('hide');
    });
    $('.end-chat').click(function () {
        $('.chat-body').addClass('hide');
        $('.chat-input').addClass('hide');
        $('.chat-session-end').removeClass('hide');
        $('.chat-header-option').addClass('hide');
    });
  }

}
