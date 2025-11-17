import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TourCart from "../components/TourCart";

export default function Homepage() {
  const tours = [
    {
      id: 1,
      title: "TOUR CARAVAN THÚ VỊ TRÊN KHẮP NẺO ĐƯỜNG",
      image:
        "https://s3-cmc.travel.com.vn/vtv-image/Images/Advertisings/bn_250630_caravan-2.webp",
    },
    {
      id: 2,
      title: "Du lịch thăm thân tại Úc - Mỹ - Canada",
      image:
        "https://s3-cmc.travel.com.vn/vtv-image/Images/Advertisings/bn_250528_statue-liberty-large-american-flag-new-york-skyline-background-162323735.webp",
    },
    {
      id: 3,
      title: "Tự hào nét Việt - Ưu đãi kích cầu du lịch nội địa",
      image:
        "https://s3-cmc.travel.com.vn/vtv-image/Images/Advertisings/bn_240925_KPSP1-tour-noi-dia-kich-cau.jpg",
    },
  ];

  return (
    <div>
      <Header />

      <h1 className="text-4xl text-red-400 text-center my-4">
        Khám phá tour
      </h1>

      <h2 className="text-2xl text-red-400 text-center">
        Sẵn sàng du lịch khắp thế giới với chúng tôi chưa?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {tours.map((tour) => (
          <TourCart key={tour.id} title={tour.title} image={tour.image} />
        ))}
      </div>

      <Footer />
    </div>
  );
}
