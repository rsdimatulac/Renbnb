'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Images', [
      { listing_id: 1, url: "https://brenb.s3.amazonaws.com/listings/1-img-1.webp" },
      { listing_id: 1, url: "https://brenb.s3.amazonaws.com/listings/1-img-2.webp" },
      { listing_id: 1, url: "https://brenb.s3.amazonaws.com/listings/1-img-3.webp" },
      { listing_id: 1, url: "https://brenb.s3.amazonaws.com/listings/1-img-4.webp" },
      { listing_id: 1, url: "https://brenb.s3.amazonaws.com/listings/1-img-5.webp" },
      { listing_id: 1, url: "https://brenb.s3.amazonaws.com/listings/1-img-6.webp" },
      { listing_id: 2, url: "https://brenb.s3.amazonaws.com/listings/2-img-1.webp" },
      { listing_id: 2, url: "https://brenb.s3.amazonaws.com/listings/2-img-2.webp" },
      { listing_id: 2, url: "https://brenb.s3.amazonaws.com/listings/2-img-3.webp" },
      { listing_id: 2, url: "https://brenb.s3.amazonaws.com/listings/2-img-4.webp" },
      { listing_id: 2, url: "https://brenb.s3.amazonaws.com/listings/2-img-5.webp" },
      { listing_id: 2, url: "https://brenb.s3.amazonaws.com/listings/2-img-6.webp" },
      { listing_id: 3, url: "https://brenb.s3.amazonaws.com/listings/3-img-1.webp" },
      { listing_id: 3, url: "https://brenb.s3.amazonaws.com/listings/3-img-2.webp" },
      { listing_id: 3, url: "https://brenb.s3.amazonaws.com/listings/3-img-3.webp" },
      { listing_id: 3, url: "https://brenb.s3.amazonaws.com/listings/3-img-4.webp" },
      { listing_id: 3, url: "https://brenb.s3.amazonaws.com/listings/3-img-5.webp" },
      { listing_id: 3, url: "https://brenb.s3.amazonaws.com/listings/3-img-6.webp" },
      { listing_id: 4, url: "https://brenb.s3.amazonaws.com/listings/4-img-1.webp" },
      { listing_id: 4, url: "https://brenb.s3.amazonaws.com/listings/4-img-2.webp" },
      { listing_id: 4, url: "https://brenb.s3.amazonaws.com/listings/4-img-3.webp" },
      { listing_id: 4, url: "https://brenb.s3.amazonaws.com/listings/4-img-4.jpg" },
      { listing_id: 4, url: "https://brenb.s3.amazonaws.com/listings/4-img-5.webp" },
      { listing_id: 4, url: "https://brenb.s3.amazonaws.com/listings/4-img-6.webp" },
      { listing_id: 5, url: "https://brenb.s3.amazonaws.com/listings/5-img-1.webp" },
      { listing_id: 5, url: "https://brenb.s3.amazonaws.com/listings/5-img-2.webp" },
      { listing_id: 5, url: "https://brenb.s3.amazonaws.com/listings/5-img-3.webp" },
      { listing_id: 5, url: "https://brenb.s3.amazonaws.com/listings/5-img-4.webp" },
      { listing_id: 5, url: "https://brenb.s3.amazonaws.com/listings/5-img-5.webp" },
      { listing_id: 5, url: "https://brenb.s3.amazonaws.com/listings/5-img-6.webp" },
      { listing_id: 6, url: "https://brenb.s3.amazonaws.com/listings/6-img-1.webp" },
      { listing_id: 6, url: "https://brenb.s3.amazonaws.com/listings/6-img-2.webp" },
      { listing_id: 6, url: "https://brenb.s3.amazonaws.com/listings/6-img-3.webp" },
      { listing_id: 6, url: "https://brenb.s3.amazonaws.com/listings/6-img-4.webp" },
      { listing_id: 6, url: "https://brenb.s3.amazonaws.com/listings/6-img-5.webp" },
      { listing_id: 6, url: "https://brenb.s3.amazonaws.com/listings/6-img-6.webp" },
      { listing_id: 7, url: "https://brenb.s3.amazonaws.com/listings/7-img-1.webp" },
      { listing_id: 7, url: "https://brenb.s3.amazonaws.com/listings/7-img-2.webp" },
      { listing_id: 7, url: "https://brenb.s3.amazonaws.com/listings/7-img-3.webp" },
      { listing_id: 7, url: "https://brenb.s3.amazonaws.com/listings/7-img-4.webp" },
      { listing_id: 7, url: "https://brenb.s3.amazonaws.com/listings/7-img-5.webp" },
      { listing_id: 7, url: "https://brenb.s3.amazonaws.com/listings/7-img-6.webp" },
      { listing_id: 8, url: "https://brenb.s3.amazonaws.com/listings/8-img-1.webp" },
      { listing_id: 8, url: "https://brenb.s3.amazonaws.com/listings/8-img-2.webp" },
      { listing_id: 8, url: "https://brenb.s3.amazonaws.com/listings/8-img-3.webp" },
      { listing_id: 8, url: "https://brenb.s3.amazonaws.com/listings/8-img-4.webp" },
      { listing_id: 8, url: "https://brenb.s3.amazonaws.com/listings/8-img-5.webp" },
      { listing_id: 8, url: "https://brenb.s3.amazonaws.com/listings/8-img-6.webp" },
      { listing_id: 9, url: "https://brenb.s3.amazonaws.com/listings/9-img-1.jpg" },
      { listing_id: 9, url: "https://brenb.s3.amazonaws.com/listings/9-img-2.webp" },
      { listing_id: 9, url: "https://brenb.s3.amazonaws.com/listings/9-img-3.webp" },
      { listing_id: 9, url: "https://brenb.s3.amazonaws.com/listings/9-img-4.webp" },
      { listing_id: 9, url: "https://brenb.s3.amazonaws.com/listings/9-img-5.webp" },
      { listing_id: 9, url: "https://brenb.s3.amazonaws.com/listings/9-img-6.webp" },
      { listing_id: 10, url: "https://brenb.s3.amazonaws.com/listings/10-img-1.webp" },
      { listing_id: 10, url: "https://brenb.s3.amazonaws.com/listings/10-img-2.webp" },
      { listing_id: 10, url: "https://brenb.s3.amazonaws.com/listings/10-img-3.webp" },
      { listing_id: 10, url: "https://brenb.s3.amazonaws.com/listings/10-img-4.webp" },
      { listing_id: 10, url: "https://brenb.s3.amazonaws.com/listings/10-img-5.webp" },
      { listing_id: 10, url: "https://brenb.s3.amazonaws.com/listings/10-img-6.webp" },
    ]);
  },
  
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Images', null, {});
  }
};
