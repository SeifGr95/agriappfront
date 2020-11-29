export class EventModel {
  _id: string;
  title: string;
  type: string;
  lieu: string;
  date: string;
  description: string;
  contenu: string;
  constructor(title, type, lieu, date, description, contenu) {
    this.title = title;
    this.type = type;
    this.lieu = lieu;
    this.date = date;
    this.description = description;
    this.contenu = contenu;
  }
}
