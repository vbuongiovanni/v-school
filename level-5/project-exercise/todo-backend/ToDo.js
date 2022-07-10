import {v4 as uuid} from "uuid";

export default class ToDo {
    constructor(name, description, imageUrl) {
        this.name = name;
        this.description = description === undefined ? "" : description;
        this.imageUrl = imageUrl === undefined ? "http://tny.im/sIg" : imageUrl;
        this.completed = false;
        this._id = uuid();
    };
}