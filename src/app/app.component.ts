import {Component, ElementRef} from '@angular/core';
import {CaretEvent, EmojiPickerOptions, EmojiEvent} from 'angular2-emoji-picker';
import {EmojiPickerAppleSheetLocator} from 'angular2-emoji-picker/lib-dist/sheets';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  version = 'v0.1';

	public eventMock;
	public eventPosMock;

	public direction = Math.random() > 0.5 ?
		(Math.random() > 0.5 ? 'top' : 'bottom') : (Math.random() > 0.5 ? 'right' : 'left');
	public toggled = false;
	public content = 'Type letters, enter emojis, go nuts...';

	private _lastCaretEvent: CaretEvent;

	constructor(private emojiPickerOptions: EmojiPickerOptions) {
		this.emojiPickerOptions.setEmojiSheet({
			url: 'sheet_apple_32.png',
			locator: EmojiPickerAppleSheetLocator
		});
	}

	handleSelection(event: EmojiEvent) {
		this.content = this.content.slice(0,
			this._lastCaretEvent.caretOffset) +
			event.char +
			this.content.slice(this._lastCaretEvent.caretOffset);
		this.eventMock = JSON.stringify(event);
	}

	handleCurrentCaret(event: CaretEvent) {
		this._lastCaretEvent = event;
		this.eventPosMock = `{ caretOffset : ${event.caretOffset}, caretRange: Range{...}, textContent: ${event.textContent} }`;
	}

}
