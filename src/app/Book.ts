export class Book {
  constructor(private _id?: number, private _title?: string, private _category?: string, private _description?: string) {

  }

  get id() {
    return this._id;
  }
  set id(value) {
    this._id = value;
  }
  get title() {
    return this._title;
  }
  set title(value) {
    this._title = value;
  }
  get category() {
    return this._category;
  }
  set category(value) {
    this._category = value;
  }

  get description() {
    return this._description;
  }
  set description(value) {
    this._description = value;
  }
}
