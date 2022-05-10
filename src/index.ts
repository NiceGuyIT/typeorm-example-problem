import { AppDataSource } from "./data-source.js";
import { Logger } from "tslog";
import { User } from "./entity/user.js";
import { Photo } from "./entity/photo.js";

export const log: Logger = new Logger({});

AppDataSource.initialize().then(async () => {

    console.log("Inserting a new user into the database...");
    const user = new User();
    user.my_id = "id1235"
    user.firstName = "Timber";
    user.lastName = "Saw";
    user.age = 25;
    await AppDataSource.manager.save(user);
    console.log("Saved a new user with id: " + user.my_id);

    console.log("Loading users from the database...");
    const users = await AppDataSource.manager.find(User);
    console.log("===== Users =====");
    console.log(users);


    console.log("Inserting a new photo into the database...");
    const photo = new Photo();
    photo.my_id = "id1234"
    photo.name = "Photo of five";
    photo.description = "Description here";
    photo.filename = "some/file.png";
    photo.views = 3;
    photo.isPublished = false;
    await AppDataSource.manager.save(photo);
    console.log("Saved a new photo with id: " + photo.my_id);

    const photos = await AppDataSource.manager.find(Photo);
    console.log("===== Photos =====");
    console.log(photos);


    let searchResults: User[] = []
    searchResults = await AppDataSource
        .getRepository(User)
        .createQueryBuilder("user")
        .leftJoinAndSelect(Photo, "photos", "user.my_id = photos.my_id")
        .where("user.my_id = :my_id", {my_id: "id1234"})
        .getMany();
        // .getRawMany();
    console.log("===== Search =====");
    console.log(searchResults);


}).catch(error => console.log(error));
