const Hotel = require("./models/Hotel");
const Room = require("./models/Room");
const mongoose = require("mongoose");
const User = require("./models/User");
const Review = require("./models/Review");
const addRoomsToHotels = async () => {
    try {
        for (let hotelData of hotelList) {
            const hotel = new Hotel(hotelData);
            await hotel.save();

            for (let roomData of roomList) {
                const room = new Room({
                    ...roomData,
                    hotel: hotel._id,
                });
                await room.save();
                hotel.rooms.push(room._id);
            }

            await hotel.save();
        }

        console.log("Rooms added to hotels successfully!");
        mongoose.connection.close();
    } catch (error) {
        console.error("Error adding rooms to hotels:", error);
        mongoose.connection.close();
    }
};

const importDummyReviews = async () => {
    try {
        const reviewTemplates = reviewList;

        const users = await User.find();
        const hotels = await Hotel.find();

        if (users.length === 0 || hotels.length === 0) {
            console.error("Không tìm thấy người dùng hoặc khách sạn");
            mongoose.connection.close();
            return;
        }

        // Phân phối ít nhất một đánh giá cho mỗi khách sạn
        for (let hotel of hotels) {
            const reviewTemplate = reviewTemplates.shift();
            if (reviewTemplate) {
                const randomUser = users[Math.floor(Math.random() * users.length)];

                const newReview = new Review({
                    user: randomUser._id,
                    hotel: hotel._id,
                    rating: reviewTemplate.rating,
                    comment: reviewTemplate.comment,
                    createdAt: reviewTemplate.createdAt,
                });

                await newReview.save();

                hotel.reviews.push(newReview._id);
                await hotel.save();
            }
        }

        // Phân phối các đánh giá còn lại một cách ngẫu nhiên
        for (let reviewTemplate of reviewTemplates) {
            const randomUser = users[Math.floor(Math.random() * users.length)];
            const randomHotel = hotels[Math.floor(Math.random() * hotels.length)];

            const newReview = new Review({
                user: randomUser._id,
                hotel: randomHotel._id,
                rating: reviewTemplate.rating,
                comment: reviewTemplate.comment,
                createdAt: reviewTemplate.createdAt,
            });

            await newReview.save();

            randomHotel.reviews.push(newReview._id);
            await randomHotel.save();
        }

        console.log("Dummy reviews created successfully!");
        mongoose.connection.close();
    } catch (error) {
        console.error("Error creating dummy reviews:", error);
        moconst addRoomsToHotels = async () => {
            try {
                for (let hotelData of hotelList) {
                    const hotel = new Hotel(hotelData);
                    await hotel.save();

                    for (let roomData of roomList) {
                        const room = new Room({
                            ...roomData,
                            hotel: hotel._id,
                        });
                        await room.save();
                        hotel.rooms.push(room._id);
                    }

                    await hotel.save();
                }

                console.log("Rooms added to hotels successfully!");
                mongoose.connection.close();
            } catch (error) {
                console.error("Error adding rooms to hotels:", error);
                mongoose.connection.close();
            }
        };

        const importDummyReviews = async () => {
            try {
                const reviewTemplates = reviewList;

                const users = await User.find();
                const hotels = await Hotel.find();

                if (users.length === 0 || hotels.length === 0) {
                    console.error("Không tìm thấy người dùng hoặc khách sạn");
                    mongoose.connection.close();
                    return;
                }

                // Phân phối ít nhất một đánh giá cho mỗi khách sạn
                for (let hotel of hotels) {
                    const reviewTemplate = reviewTemplates.shift();
                    if (reviewTemplate) {
                        const randomUser = users[Math.floor(Math.random() * users.length)];

                        const newReview = new Review({
                            user: randomUser._id,
                            hotel: hotel._id,
                            rating: reviewTemplate.rating,
                            comment: reviewTemplate.comment,
                            createdAt: reviewTemplate.createdAt,
                        });

                        await newReview.save();

                        hotel.reviews.push(newReview._id);
                        await hotel.save();
                    }
                }

                // Phân phối các đánh giá còn lại một cách ngẫu nhiên
                for (let reviewTemplate of reviewTemplates) {
                    const randomUser = users[Math.floor(Math.random() * users.length)];
                    const randomHotel = hotels[Math.floor(Math.random() * hotels.length)];

                    const newReview = new Review({
                        user: randomUser._id,
                        hotel: randomHotel._id,
                        rating: reviewTemplate.rating,
                        comment: reviewTemplate.comment,
                        createdAt: reviewTemplate.createdAt,
                    });

                    await newReview.save();

                    randomHotel.reviews.push(newReview._id);
                    await randomHotel.save();
                }

                console.log("Dummy reviews created successfully!");
                mongoose.connection.close();
            } catch (error) {
                console.error("Error creating dummy reviews:", error);
                mongoose.connection.close();
            }
        };

        const updateAllHotelRatings = async () => {
            const hotels = await Hotel.find();
            for (const hotel of hotels) {
                await hotel.updateRating();
            }
            console.log("All hotel ratings updated");
        };

        const updateUserReviews = async () => {
            try {
                const users = await User.find();
                for (const user of users) {
                    const reviews = await Review.find({ user: user._id });
                    user.reviews = reviews.map((review) => review._id);
                    await user.save();
                }
                console.log("User reviews updated successfully!");
            } catch (error) {
                console.error("Error updating user reviews:", error);
            }
        };ngoose.connection.close();
    }
};

const updateAllHotelRatings = async () => {
    const hotels = await Hotel.find();
    for (const hotel of hotels) {
        await hotel.updateRating();
    }
    console.log("All hotel ratings updated");
};

const updateUserReviews = async () => {
    try {
        const users = await User.find();
        for (const user of users) {
            const reviews = await Review.find({ user: user._id });
            user.reviews = reviews.map((review) => review._id);
            await user.save();
        }
        console.log("User reviews updated successfully!");
    } catch (error) {
        console.error("Error updating user reviews:", error);
    }
};