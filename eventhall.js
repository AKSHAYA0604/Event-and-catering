
// Define the event halls data once
const hallsByCity = {
    "kukatpally": [
            {
                "name": "Event Hall Kukatpally 1",
                "caption": "Elegant and Spacious Venue",
                "description": "A grand venue suitable for large gatherings, weddings, and corporate events, featuring modern amenities and ample space.",
                "capacity": "500 guests",
                "reviews": [
                    { "text": "Fantastic venue for large events!", "rating": 5, "reviewer": "Emily Clark" },
                    { "text": "Spacious and well-maintained.", "rating": 4.8, "reviewer": "Michael Green" },
                    { "text": "Great place for a big celebration.", "rating": 4.7, "reviewer": "Sarah Taylor" }
                ],
                "photos": [
                     "https://media.istockphoto.com/id/1283271838/photo/conference-hall.jpg?s=612x612&w=0&k=20&c=WIEkkW9ejw5czSyf-7cfWCveTCf2TaoZKG36op3bvfw=",
                 "https://www.eventsource.ca/listings/OEBanquetHall/gallery/oe-banquet-hall-oakville-045-full_size.jpg?preset=sq340",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREJIWi2kv6JcaUCq64aVEO-CCPPucctbb-fmucrk6W5bwyVMO-XmAjMJ_WRmEL295Sg4c&usqp=CAU",
                ]
            },
            {
                "name": "Event Hall Kukatpally 2",
                "caption": "Luxurious and Modern",
                "description": "A stylish and upscale event hall with state-of-the-art facilities, perfect for high-profile events and weddings.",
                "capacity": "400 guests",
                "reviews": [
                    { "text": "Luxurious and well-equipped.", "rating": 5, "reviewer": "James Smith" },
                    { "text": "Perfect for upscale events.", "rating": 4.9, "reviewer": "Olivia Davis" },
                    { "text": "Impressive venue with modern design.", "rating": 4.8, "reviewer": "Noah Harris" }
                ],
                "photos": [
                    "https://img.freepik.com/free-photo/3d-rendering-seminar-meeting-banquet-hall-room_105762-1773.jpg",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhKJh8dUqX0edvfPRZHXqViNiorl7Yj5PD8JE3P4OqTsUiwM_-8atao1zKQvwPDzpTYt8&usqp=CAU",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWQbJkR_MnQu7avX3ohP2BgXLHVOOX1AE0_w&s",
                ]
            },
            {
                "name": "Event Hall Kukatpally 3",
                "caption": "Classic and Elegant",
                "description": "An elegant event space with a classic design, suitable for both formal and informal events.",
                "capacity": "300 guests",
                "reviews": [
                    { "text": "Classic and elegant venue.", "rating": 4.9, "reviewer": "Sophia Johnson" },
                    { "text": "Great for formal events.", "rating": 4.7, "reviewer": "Liam Wilson" },
                    { "text": "Well-designed and spacious.", "rating": 4.6, "reviewer": "Mia Robinson" }
                ],
                "photos": [
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp4zPo8KV8kqS8OK9CH08XPlp6l0ST-PglDg&s",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv52XxxASIikbCMpc8RvTSy-Y2Bbaczb_i5Q&s",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvn-eYnaw-D7V7pm0i-fcjHmvHlNEBYbA6UA&s",
                ]
            },
            {
                "name": "Event Hall Kukatpally 4",
                "caption": "Versatile and Functional",
                "description": "A versatile event hall that can be adapted for various types of events, from corporate meetings to weddings.",
                "capacity": "350 guests",
                "reviews": [
                    { "text": "Highly functional and adaptable.", "rating": 4.8, "reviewer": "Lucas Brown" },
                    { "text": "Great for various events.", "rating": 4.7, "reviewer": "Ella Wilson" },
                    { "text": "Versatile space with good facilities.", "rating": 4.6, "reviewer": "Aiden Harris" }
                ],
                "photos": [
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjH6JKykcFKguyBfYxvxmN-52vyinlG3Scu8uiiqrMEOv76smF3j9ceCeeoqHo9FpEUVg&usqp=CAU",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoxe8Qxepwv5OsN_XhQ4JH6R79SoqaP20RJZWak4CwSFxAmjBdunObXl2Ai6qYsYZDuhY&usqp=CAU",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL7Cd_JHKPgpcYQ-HO0zKagDCAaqvc8daJszxJ0NbGN0GyCaLuwYeN8BJGREW4u1LDs9I&usqp=CAU",
    
                ]
            }
        ],
        "ameerpet": [
            {
                "name": "Event Hall Ameerpet 1",
                "caption": "Elegant and Chic Venue",
                "description": "An elegant venue with chic interiors, ideal for weddings, parties, and corporate events.",
                "capacity": "450 guests",
                "reviews": [
                    { "text": "Beautiful and elegant venue.", "rating": 5, "reviewer": "Liam Wilson" },
                    { "text": "Chic and stylish space.", "rating": 4.8, "reviewer": "Olivia Davis" },
                    { "text": "Perfect for a sophisticated event.", "rating": 4.7, "reviewer": "Noah Harris" }
                ],
                "photos": [
                    "https://i.pinimg.com/236x/46/76/3e/46763eff7e1d5cab7d39fccd93c8869b.jpg",
                    "https://img.freepik.com/free-photo/restaurant-hall-with-small-stage-monitor-red-curtains-brick-walls-white-napoleon-chairs_140725-8447.jpg",
                    "https://img.freepik.com/free-photo/beautiful-pink-decorated-wedding-serving-with-centerpiece-lightening-candles_8353-10052.jpg",
                ]
            },
            {
                "name": "Event Hall Ameerpet 2",
                "caption": "Stylish and Modern",
                "description": "A modern event hall with stylish design, perfect for contemporary events and parties.",
                "capacity": "350 guests",
                "reviews": [
                    { "text": "Modern and stylish venue.", "rating": 4.9, "reviewer": "Emma Johnson" },
                    { "text": "Great for modern events.", "rating": 4.8, "reviewer": "Aiden Harris" },
                    { "text": "Well-designed and functional.", "rating": 4.7, "reviewer": "Sophia Martinez" }
                ],
                "photos": [
                    "https://images.unsplash.com/photo-1709521440400-bf38b562b194?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXZlbnQlMjBoYWxsfGVufDB8fDB8fHww",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS-UCCR3xPev1ToViP0ZaHhhDZnbZEpdCcFp91SKmhXIzDJxkHjNkJS6i_YM3yEl-b1tw&usqp=CAU",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzs_KbvfsJuDbxI7EHkJb-eiRDXS3sqoaT8uU4oTaD781YSLEqiynhxl7O4yHrTK-0L9o&usqp=CAU",
                ]
            },
            {
                "name": "Event Hall Ameerpet 3",
                "caption": "Grand and Luxurious",
                "description": "A grand hall with luxurious features, suitable for high-profile events and grand celebrations.",
                "capacity": "500 guests",
                "reviews": [
                    { "text": "Luxurious and grand venue.", "rating": 5, "reviewer": "Charlotte Hall" },
                    { "text": "Perfect for high-profile events.", "rating": 4.9, "reviewer": "Benjamin King" },
                    { "text": "Impressive and spacious.", "rating": 4.8, "reviewer": "Amelia Scott" }
                ],
                "photos": [
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc4mY1RZEEYBQjDUAfJlhI3NlGdUllK_xUWU7Zo-8rfZaGNU19qL23EJBKRj1zwnpaPIE&usqp=CAU",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJv16y8L3AmlSaQUNQf2rvdam3rRxy4SrhlTnbpSOZ_ggRFH4vl9K65FMCOPQb821AAow&usqp=CAU",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdnXr_PcQrp6i4KPYrrPqhfPznVHy4cdsVU6fPqCDHCIn52Smp-XZARuxPu8rMcujK8BA&usqp=CAU",
                ]
            },
            {
                "name": "Event Hall Ameerpet 4",
                "caption": "Versatile and Flexible",
                "description": "A versatile hall that can be tailored for various types of events, from conferences to weddings.",
                "capacity": "400 guests",
                "reviews": [
                    { "text": "Flexible and versatile venue.", "rating": 4.8, "reviewer": "Grace Wilson" },
                    { "text": "Great for different event types.", "rating": 4.7, "reviewer": "Evelyn Johnson" },
                    { "text": "Well-suited for many occasions.", "rating": 4.6, "reviewer": "Liam Martin" }
                ],
                "photos": [
                   "https://cdn0.weddingwire.ca/vendor/2095/3_2/1280/jpg/allstream-2.jpeg",
                   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLK_xKhP4JawRNoBMWTtyh4zc_htVsAogR9dGUMFOOeP7s-NmEfzNYeQs2SdBgkcNfGnk&usqp=CAU",
                   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSL-IZ7NNK1hX-9JEi1miohpuo-bhqZIoGNUugtkrSM0oqgzFjxBH4TKVAlYk6YCPbf5w&usqp=CAU",
                ]
            }
        ],
        "banjarahills": [
            {
                "name": "Event Hall Banjara Hills 1",
                "caption": "Elegant and Spacious Venue",
                "description": "A spacious and elegant hall, ideal for weddings, corporate events, and large gatherings.",
                "capacity": "450 guests",
                "reviews": [
                    { "text": "Spacious and well-designed.", "rating": 5, "reviewer": "Mia Robinson" },
                    { "text": "Elegant venue for large events.", "rating": 4.9, "reviewer": "Ethan Moore" },
                    { "text": "Perfect for any large gathering.", "rating": 4.8, "reviewer": "Sophia Martinez" }
                ],
                "photos": [
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS36_Vh3Pt9192ELH42sVc_ngy860OYfgJoEf0nBFTyUA_RXFTOOhK4Pb74idP3q8H_A6U&usqp=CAU",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs35-Tkgq7lI9BBbXoB4k1dmF_K2uersUrqw&s",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTic4XdoCxPk4wfsP7LwqCF9vEQT7YgLldmqA&s",
                ]
            },
            {
                "name": "Event Hall Banjara Hills 2",
                "caption": "Modern and Luxurious",
                "description": "A modern and luxurious venue, perfect for high-profile events and celebrations.",
                "capacity": "400 guests",
                "reviews": [
                    { "text": "Luxurious and modern design.", "rating": 4.9, "reviewer": "Jackson Taylor" },
                    { "text": "Ideal for upscale events.", "rating": 4.8, "reviewer": "Ava Davis" },{ "text": "Perfect for a sophisticated event.", "rating": 4.7, "reviewer": "Noah Harris" }
                ],
                "photos": [
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgFvjPsEfJp7AXWcG_ewhzgTyYeMqpuehsW_F0MjskrXCbZgepVJucnOkZvwrECTbX4fQ&usqp=CAU",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHobYftlLjzl3RzWPnWBUyjCvzNIL-RJwr0NHCw69Wx5dAKXm0cCMze0UhpZ5vvQKnMpI&usqp=CAU",
                    "https://images.zola.com/1ec3965e-1828-4dbc-8deb-f058d2abfe3b?w=600&h=400&fit=crop&q=60&fm=webp",
                ]
            },
            {
                "name": "Event Hall Banjara Hills 3",
                "caption": "Stylish and Modern",
                "description": "A modern event hall with stylish design, perfect for contemporary events and parties.",
                "capacity": "350 guests",
                "reviews": [
                    { "text": "Modern and stylish venue.", "rating": 4.9, "reviewer": "Emma Johnson" },
                    { "text": "Great for modern events.", "rating": 4.8, "reviewer": "Aiden Harris" },
                    { "text": "Well-designed and functional.", "rating": 4.7, "reviewer": "Sophia Martinez" }
                ],
                "photos": [
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJdDTL9gJpuq2OI5Hpf9DpURHkzq8dqYxv7A&s",
                    "https://hips.hearstapps.com/hmg-prod/images/garden-wedding-venues-7-1500664948.jpg",
                    "https://cateringserviceshyderabad.com/wp-content/uploads/2023/07/catering-services-hyderabad-biryani.jpg",
                ]
            },
            {
                "name": "Event Hall Banjara Hills 4",
                "caption": "Grand and Luxurious",
                "description": "A grand hall with luxurious features, suitable for high-profile events and grand celebrations.",
                "capacity": "500 guests",
                "reviews": [
                    { "text": "Luxurious and grand venue.", "rating": 5, "reviewer": "Charlotte Hall" },
                    { "text": "Perfect for high-profile events.", "rating": 4.9, "reviewer": "Benjamin King" },
                    { "text": "Impressive and spacious.", "rating": 4.8, "reviewer": "Amelia Scott" }
                ],
                "photos": [
                    "https://images.squarespace-cdn.com/content/v1/5368697fe4b07ba114021f78/5e99f1a5-570f-4e0d-9244-9ef00e6c9606/short-straw-events-wedding-11.jpg",
                    "https://www.wedding-spot.com/blog/sites/wsblog/files/images/migrated/89-Wedding%2Bvenue%2Bwith%2Bgreenery%2Band%2Bwhite%2Btablecloths.jpg",
                    "https://assets.easyweddings.com/files/2021/10/28183814/choosing-a-venue-3.jpg",
                ]
            },
        ],
    "secunderabad": [
        {
            "name": "Event Hall Secunderabad 1",
            "caption": "Grand and Luxurious",
            "description": "A grand and luxurious venue, perfect for high-profile events and weddings.",
            "capacity": "500 guests",
            "reviews": [
                { "text": "Luxurious and grand venue.", "rating": 5, "reviewer": "Chloe Johnson" },
                { "text": "Perfect for high-profile events.", "rating": 4.9, "reviewer": "Ethan Martin" },
                { "text": "Impressive and spacious.", "rating": 4.8, "reviewer": "Sophie Lee" }
            ],
            "photos": [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMDelkZ3FxFAs-E8nNgIYZZXH4Zr8u3qcJujVWjSEpl1mmWWEzmW7bz-oXAlZNb9xtIQ0&usqp=CAU",
                "https://hctg-images.imgix.net/images/venues/hyatt-regency-new-brunswick/20240401HyattRegencyNewBrunswick16.jpg?auto=format%2Ccompress&fit=clamp&h=430&s=2a3f4e689965d9697f0bee3fcc79864d",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShsNC1PNIukk1Cdxk24gUILQwRcUHRS7t3k-rYUsrjXrROL065nER_bb30noFrmzGi5b4&usqp=CAU",
            ]
        },
        {
            "name": "Event Hall Secunderabad 2",
            "caption": "Elegant and Classic",
            "description": "An elegant and classic hall, suitable for formal events and celebrations.",
            "capacity": "400 guests",
            "reviews": [
                { "text": "Classic and elegant venue.", "rating": 4.9, "reviewer": "Emily White" },
                { "text": "Great for formal events.", "rating": 4.8, "reviewer": "Noah Green" },
                { "text": "Well-designed and charming.", "rating": 4.7, "reviewer": "Liam Brown" }
            ],
            "photos": [
                "https://cdn0.weddingwire.com/vendor/742503/3_2/640/jpg/1418945916763-deiaco-1412.jpeg",
                "https://cateringserviceshyderabad.com/wp-content/uploads/2023/07/catering-services-hyderabad-biryani.jpg",
                "https://media.weddingz.in/images/8c3abaa40a284c830cdb4b1d4994e750/best-wedding-halls-in-mysore-for-the-best-day-of-your-life.jpg",
            ]
        },
        {
            "name": "Event Hall Secunderabad 3",
            "caption": "Modern and Functional",
            "description": "A modern and functional hall with versatile design, suitable for various types of events.",
            "capacity": "350 guests",
            "reviews": [
                { "text": "Modern and functional venue.", "rating": 4.8, "reviewer": "Sarah Harris" },
                { "text": "Great for various events.", "rating": 4.7, "reviewer": "Lucas Davis" },
                { "text": "Versatile and well-designed.", "rating": 4.6, "reviewer": "Ella Robinson" }
            ],
            "photos": [
                'https://cdn0.weddingwire.com/vendor/831329/3_2/640/jpg/1461270918030-dy4v9504.jpeg',
                "https://cdn0.weddingwire.com/vendor/552700/3_2/960/jpg/1527113524-18d60fbc5708b5ac-1527113523-a9d2d740e6831419-1527113513753-12-Screen_Shot_2018-.jpeg",
                'https://cdn.venuemonk.com/wp-content/uploads/2020/11/wedding-caterers-in-Bangalore-1024x578.jpg',
            ]
        },
        {

"name": "Event Hall Secunderabad 4",
            "caption": "Versatile and Spacious",
            "description": "A spacious and versatile venue that can accommodate various types of events and functions.",
            "capacity": "450 guests",
            "reviews": [
                { "text": "Spacious and versatile hall.", "rating": 4.9, "reviewer": "John Martin" },
                { "text": "Great for large events.", "rating": 4.8, "reviewer": "Ava Wilson" },
                { "text": "Well-equipped and adaptable.", "rating": 4.7, "reviewer": "James Taylor" }
            ],
            "photos": [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVReufS_Y1Qx4uuGzNKU_PjxgV106nIKxspNPLXgaZEhXUIQoVOu012dtmKGcY6-GWzgc&usqp=CAU",
                "https://s3-media0.fl.yelpcdn.com/bphoto/XJozerI-9_i8qmFpIFMh5w/300s.jpg",
                "https://s3-media0.fl.yelpcdn.com/bphoto/m8Fry3pWiHlWvB_Icq6PdA/180s.jpg",
            ]
        }
    ],
    "nagole": [
        {
            "name": "Event Hall Nagole 1",
            "caption": "Elegant and Spacious",
            "description": "An elegant and spacious hall, ideal for large gatherings and celebrations.",
            "capacity": "500 guests",
            "reviews": [
                { "text": "Spacious and elegant venue.", "rating": 5, "reviewer": "Isabella Scott" },
                { "text": "Perfect for large events.", "rating": 4.8, "reviewer": "Ethan Lee" },
                { "text": "Well-maintained and impressive.", "rating": 4.7, "reviewer": "Mia Lewis" }
            ],
            "photos": [
                'https://cdn.venuemonk.com/wp-content/uploads/2020/11/wedding-caterers-in-Bangalore-1024x578.jpg',
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgFvjPsEfJp7AXWcG_ewhzgTyYeMqpuehsW_F0MjskrXCbZgepVJucnOkZvwrECTbX4fQ&usqp=CAU",
                "https://images.zola.com/1ec3965e-1828-4dbc-8deb-f058d2abfe3b?w=600&h=400&fit=crop&q=60&fm=webp",
            ]
        },
        {
            "name": "Event Hall Nagole 2",
            "caption": "Modern and Stylish",
            "description": "A modern and stylish venue with all the amenities for a successful event.",
            "capacity": "400 guests",
            "reviews": [
                { "text": "Modern and stylish venue.", "rating": 4.9, "reviewer": "Ava Martinez" },
                { "text": "Great for contemporary events.", "rating": 4.8, "reviewer": "Jack Brown" },
                { "text": "Well-designed and functional.", "rating": 4.7, "reviewer": "Sophia White" }
            ],
            "photos": [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShsNC1PNIukk1Cdxk24gUILQwRcUHRS7t3k-rYUsrjXrROL065nER_bb30noFrmzGi5b4&usqp=CAU",
                "https://cdn0.weddingwire.com/vendor/831329/3_2/640/jpg/1461270918030-dy4v9504.jpeg",
                "https://cdn0.weddingwire.com/vendor/742503/3_2/640/jpg/1418945916763-deiaco-1412.jpeg",
            ]
        },
        {
            "name": "Event Hall Nagole 3",
            "caption": "Classic and Elegant",
            "description": "A classic and elegant hall with a timeless design, suitable for a variety of events.",
            "capacity": "350 guests",
            "reviews": [
                { "text": "Elegant and classic venue.", "rating": 4.8, "reviewer": "Liam Harris" },
                { "text": "Perfect for formal events.", "rating": 4.7, "reviewer": "Mia Taylor" },
                { "text": "Beautiful and well-designed.", "rating": 4.6, "reviewer": "Ethan Martin" }
            ],
            "photos": [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqyFen1viIK6w3O49WKJICkT_oZXPN5MWfnrgZpgeF83SJOawii42ijVBXBNwrZp1zYcQ&usqp=CAU",
                "https://cdn.venuemonk.com/wp-content/uploads/2020/11/wedding-caterers-in-Bangalore-1024x578.jpg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVReufS_Y1Qx4uuGzNKU_PjxgV106nIKxspNPLXgaZEhXUIQoVOu012dtmKGcY6-GWzgc&usqp=CAU",
            ]
        },
        {
            "name": "Event Hall Nagole 4",
            "caption": "Luxurious and Modern",
            "description": "A luxurious and modern event hall designed for upscale events and functions.",
            "capacity": "450 guests",
            "reviews": [
                { "text": "Luxurious and modern hall.", "rating": 4.9, "reviewer": "Emily White" },
                { "text": "Ideal for high-end events.", "rating": 4.8, "reviewer": "Liam Brown" },
                { "text": "Great design and facilities.", "rating": 4.7, "reviewer": "Sophie Johnson" }
            ],
            "photos": [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHobYftlLjzl3RzWPnWBUyjCvzNIL-RJwr0NHCw69Wx5dAKXm0cCMze0UhpZ5vvQKnMpI&usqp=CAU",
                "https://s3-media0.fl.yelpcdn.com/bphoto/m8Fry3pWiHlWvB_Icq6PdA/180s.jpg",
                 "https://static.wixstatic.com/media/594e7c_db64779f97544b06b8fd61a84f7861b8~mv2.jpg/v1/fill/w_640,h_446,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/594e7c_db64779f97544b06b8fd61a84f7861b8~mv2.jpg",
            ]
        }
    ],
    "hitech_city": [
        {
            "name": "Event Hall Hitech City 1",
            "caption": "Contemporary and Elegant",

"description": "A contemporary and elegant hall, ideal for corporate events and social gatherings.",
            "capacity": "400 guests",
            "reviews": [
                { "text": "Contemporary and elegant venue.", "rating": 4.9, "reviewer": "Olivia Scott" },
                { "text": "Perfect for corporate events.", "rating": 4.8, "reviewer": "Mason Lee" },
                { "text": "Well-designed and functional.", "rating": 4.7, "reviewer": "Ava Brown" }
            ],
            "photos": [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMDelkZ3FxFAs-E8nNgIYZZXH4Zr8u3qcJujVWjSEpl1mmWWEzmW7bz-oXAlZNb9xtIQ0&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqyFen1viIK6w3O49WKJICkT_oZXPN5MWfnrgZpgeF83SJOawii42ijVBXBNwrZp1zYcQ&usqp=CAU",
                'https://cdn.venuemonk.com/wp-content/uploads/2020/11/wedding-caterers-in-Bangalore-1024x578.jpg',
            ]
        },
        {
            "name": "Event Hall Hitech City 2",
            "caption": "Modern and Versatile",
            "description": "A modern and versatile hall with flexible space for various events and functions.",
            "capacity": "350 guests",
            "reviews": [
                { "text": "Modern and versatile venue.", "rating": 4.8, "reviewer": "Mia White" },
                { "text": "Great for different types of events.", "rating": 4.7, "reviewer": "Ethan Harris" },
                { "text": "Well-designed and adaptable.", "rating": 4.6, "reviewer": "Sophia Johnson" }
            ],
            "photos": [
                "https://hctg-images.imgix.net/images/venues/hyatt-regency-new-brunswick/20240401HyattRegencyNewBrunswick16.jpg?auto=format%2Ccompress&fit=clamp&h=430&s=2a3f4e689965d9697f0bee3fcc79864d",
                "https://cdn0.weddingwire.com/vendor/590829/3_2/640/jpg/2022-09-04-fave-135_51_1928095-167571839336482.jpeg",
                "https://cdn0.weddingwire.com/vendor/552700/3_2/960/jpg/1527113524-18d60fbc5708b5ac-1527113523-a9d2d740e6831419-1527113513753-12-Screen_Shot_2018-.jpeg",
            ]
        },
        {
            "name": "Event Hall Hitech City 3",
            "caption": "Elegant and Spacious",
            "description": "An elegant and spacious venue suitable for large events and gatherings.",
            "capacity": "500 guests",
            "reviews": [
                { "text": "Elegant and spacious hall.", "rating": 4.9, "reviewer": "Liam Scott" },
                { "text": "Perfect for big events.", "rating": 4.8, "reviewer": "Olivia Harris" },
                { "text": "Well-equipped and stylish.", "rating": 4.7, "reviewer": "Emma Taylor" }
            ],
            "photos": [
                "https://luxecreative.com/wp-content/uploads/2019/09/stage-ae-4.jpg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdQg-bmVjznk31UmBEGZIIrF9-_E3mHDgZFBRtwQwLp-1oy3V7VKxGteCKLTCymi5zQL0&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsq_3GPjKsjST5g4k5D14s75ykFM32njQYUi3mT-Lpv4i5ihp-qRLjXgLymIzPv9X5h3Y&usqp=CAU",
            ]
        },
        {
            "name": "Event Hall Hitech City 4",
            "caption": "Stylish and Functional",
            "description": "A stylish and functional hall ideal for a range of events and occasions.",
            "capacity": "400 guests",
            "reviews": [
                { "text": "Stylish and functional venue.", "rating": 4.8, "reviewer": "Isabella Johnson" },
                { "text": "Great for various events.", "rating": 4.7, "reviewer": "James Davis" },
                { "text": "Well-designed and practical.", "rating": 4.6, "reviewer": "Ava Lewis" }
            ],
            "photos": [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdQg-bmVjznk31UmBEGZIIrF9-_E3mHDgZFBRtwQwLp-1oy3V7VKxGteCKLTCymi5zQL0&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJhszN01cmgOT5G12zOi1QerEkgflFfXAqSg1cwhUikrpDahLnXL0eLrFrBOsKOXB6BVg&usqp=CAU",
                "https://luxecreative.com/wp-content/uploads/2019/09/stage-ae-4.jpg",
            ]
        }
    ],
    "narsingi": [
        {
            "name": "Event Hall Narsingi 1",
            "caption": "Traditional and Elegant",
            "description": "A traditional and elegant venue, ideal for cultural and formal events.",
            "capacity": "450 guests",
            "reviews": [
                { "text": "Traditional and elegant hall.", "rating": 4.8, "reviewer": "Sophia Johnson" },
                { "text": "Perfect for cultural events.", "rating": 4.7, "reviewer": "Liam Smith" },
                { "text": "Well-maintained and spacious.", "rating": 4.6, "reviewer": "Emma Lewis" }
            ],
            "photos": [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSL-IZ7NNK1hX-9JEi1miohpuo-bhqZIoGNUugtkrSM0oqgzFjxBH4TKVAlYk6YCPbf5w&usqp=CAU",
                "https://cdn0.weddingwire.com/vendor/547557/3_2/960/jpg/hg0004_51_1755745-1568745357.jpeg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4-fHM8d_BMkYz3OkvSBglfj_eeY0aHHnQafPYBQmZcpxLyDYYxQuCsxmxYr34fJ0PUTA&usqp=CAU",
            ]
        },
        {
            "name": "Event Hall Narsingi 2",
            "caption": "Modern and Stylish",
            "description": "A modern and stylish hall with contemporary amenities for a range of events.",
            "capacity": "400 guests",

"reviews": [
                { "text": "Modern and stylish venue.", "rating": 4.9, "reviewer": "Jackson Taylor" },
                { "text": "Great for contemporary events.", "rating": 4.8, "reviewer": "Ava Davis" },
                { "text": "Well-designed and functional.", "rating": 4.7, "reviewer": "William Harris" }
            ],
            "photos": [
                "https://static.wixstatic.com/media/594e7c_db64779f97544b06b8fd61a84f7861b8~mv2.jpg/v1/fill/w_640,h_446,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/594e7c_db64779f97544b06b8fd61a84f7861b8~mv2.jpg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsq_3GPjKsjST5g4k5D14s75ykFM32njQYUi3mT-Lpv4i5ihp-qRLjXgLymIzPv9X5h3Y&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJhszN01cmgOT5G12zOi1QerEkgflFfXAqSg1cwhUikrpDahLnXL0eLrFrBOsKOXB6BVg&usqp=CAU",
            ]
        },
        {
            "name": "Event Hall Narsingi 3",
            "caption": "Elegant and Spacious",
            "description": "An elegant and spacious hall, perfect for large events and gatherings.",
            "capacity": "500 guests",
            "reviews": [
                { "text": "Elegant and spacious venue.", "rating": 4.9, "reviewer": "Emily Johnson" },
                { "text": "Ideal for large events.", "rating": 4.8, "reviewer": "Michael Davis" },
                { "text": "Well-equipped and stylish.", "rating": 4.7, "reviewer": "Sophie Martin" }
            ],
            "photos": [
                "https://cdn0.weddingwire.com/vendor/590829/3_2/640/jpg/2022-09-04-fave-135_51_1928095-167571839336482.jpeg",
                "https://s3-media0.fl.yelpcdn.com/bphoto/m8Fry3pWiHlWvB_Icq6PdA/180s.jpg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHobYftlLjzl3RzWPnWBUyjCvzNIL-RJwr0NHCw69Wx5dAKXm0cCMze0UhpZ5vvQKnMpI&usqp=CAU",
            ]
        },
        {
            "name": "Event Hall Narsingi 4",
            "caption": "Modern and Functional",
            "description": "A modern and functional hall designed for a variety of events and occasions.",
            "capacity": "400 guests",
            "reviews": [
                { "text": "Modern and functional venue.", "rating": 4.8, "reviewer": "Mia Wilson" },
                { "text": "Great for different types of events.", "rating": 4.7, "reviewer": "Ethan Brown" },
                { "text": "Well-designed and adaptable.", "rating": 4.6, "reviewer": "Sophia Taylor" }
            ],
            "photos": [
                "https://media.weddingz.in/images/8c3abaa40a284c830cdb4b1d4994e750/best-wedding-halls-in-mysore-for-the-best-day-of-your-life.jpg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqyFen1viIK6w3O49WKJICkT_oZXPN5MWfnrgZpgeF83SJOawii42ijVBXBNwrZp1zYcQ&usqp=CAU",
                "https://s3-media0.fl.yelpcdn.com/bphoto/XJozerI-9_i8qmFpIFMh5w/300s.jpg",
            ]
        }
    ]
}


// Function to search and display event halls based on the selected city
function searchHalls() {
    const city = document.getElementById('city').value;
    const halls = hallsByCity[city] || [];
    const hallsContainer = document.getElementById('hallsContainer');
    hallsContainer.innerHTML = '';

    halls.forEach(hall => {
        const hallCard = document.createElement('div');
        hallCard.className = 'hall-card';
        hallCard.innerHTML = `
            <div class="hall-name">${hall.name}</div>
            <img src="${hall.photos[0]}" alt="${hall.name}">
            <h2>${hall.caption}</h2>
            <p>${hall.description}</p>
            <button class="btn" onclick="showHallDetails('${city}', '${hall.name}')">View Details</button>
        `;
        hallsContainer.appendChild(hallCard);
    });

    document.getElementById('citySelection').style.display = 'none';
    document.getElementById('eventHalls').style.display = 'block';
}

// Show City Selection after Event Type is selected
function showCitySelection() {
    const eventType = document.getElementById("eventHallType").value;
    if (eventType !== "Select Event Type") {
        document.getElementById("citySelection").style.display = "block";
    }
}

// Function to display the details of the selected hall
function showHallDetails(city, hallName) {
    const hall = hallsByCity[city]?.find(hall => hall.name === hallName);
    if (!hall) {
        alert('Hall not found');
        return;
    }

    document.getElementById('hallName').innerText = hall.name;
    document.getElementById('hallDescription').innerText = hall.description;

    const mainImage = document.getElementById('hallMainImage');
    mainImage.innerHTML = `<img src="${hall.photos[0]}" alt="${hall.name}">`;

    const thumbnails = document.getElementById('hallImages');
    thumbnails.innerHTML = hall.photos.slice(1).map(photo => `<img src="${photo}" alt="${hall.name}">`).join('');

    const reviews = document.getElementById('hallReviews');
    reviews.innerHTML = hall.reviews.map(review => `
        <div>
            <p><strong>${review.reviewer}:</strong> ${review.text} <span>(${review.rating} stars)</span></p>
        </div>
    `).join('');

    document.getElementById('eventHalls').style.display = 'none';
    document.getElementById('hallDetails').style.display = 'block';
}

// Function to show catering options
function showCateringOptions() {
    document.getElementById('cateringOptions').style.display = 'block';
    document.getElementById('hallDetails').style.display = 'none';
}

// Function to confirm booking
function confirmBooking() {
    const hallName = document.getElementById('hallName').innerText;
    const cartUrl = `cart.html?hall=${encodeURIComponent(hallName)}`;

    if (document.getElementById('cateringOptions').style.display === 'block') {
        window.location.href = cartUrl; // Redirect to the cart page with hall name
    } else {
        window.location.href = cartUrl; // Redirect to the cart page with hall name
    }
}

// Function to go back to city selection
function goBackToCitySelection() {
    document.getElementById('eventHalls').style.display = 'none';
    document.getElementById('citySelection').style.display = 'block';
}

// Function to go back to event halls
function goBackToHalls() {
    document.getElementById('hallDetails').style.display = 'none';
    document.getElementById('eventHalls').style.display = 'block';
}

// Function to go back to hall details from catering options
function goBackToHallDetails() {
    document.getElementById('cateringOptions').style.display = 'none';
    document.getElementById('hallDetails').style.display = 'block';
}

let selectedHall = null;

// Function to add hall to cart
function addToCart(hall) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(hall);
    localStorage.setItem('cart', JSON.stringify(cart));
    window.location.href = 'cart.html'; // Redirect to cart page
}

// Function to handle when a user clicks 'Add to Cart'
function addToCartAndRedirect() {
    const hallName = document.getElementById('hallName').innerText;
    const hallDescription = document.getElementById('hallDescription').innerText;
    const hallPhotos = Array.from(document.querySelectorAll('#hallImages img')).map(img => img.src);

    // Create hall object
    const hall = {
        name: hallName,
        description: hallDescription,
        photos: hallPhotos,
        // Add other details if necessary
    };

    addToCart(hall);
}

// Function to show catering options
function showCateringOptions() {
    localStorage.setItem('fromCatering', 'true');
    window.location.href = 'catering.html';
}

// Function to redirect to cart page
function redirectToCart() {
    localStorage.setItem('fromCatering', 'false');
    window.location.href = 'cart.html';
}

// Function to confirm booking
function confirmBooking() {
    alert('Booking Confirmed!');
}

// Function to go back to city selection
function goBackToCitySelection() {
    document.getElementById('eventHalls').style.display = 'none';
    document.getElementById('citySelection').style.display = 'block';
}

// Function to go back to event halls
function goBackToHalls() {
    document.getElementById('hallDetails').style.display = 'none';
    document.getElementById('eventHalls').style.display = 'block';
}

// Function to go back to hall details from catering options
function goBackToHallDetails() {
    document.getElementById('cateringOptions').style.display = 'none';
    document.getElementById('hallDetails').style.display = 'block';
}

// Function to send a chat message
function sendMessage() {
    const message = document.getElementById('chatMessage').value;
    if (message.trim()) {
        alert('Message sent: ' + message);
        document.getElementById('chatMessage').value = '';
    } else {
        alert('Please enter a message.');
    }
}

// Function to close the chat box
function closeChat() {
    document.getElementById('chatBox').style.display = 'none';
}

// Show chat box for testing (remove this line in production)
document.getElementById('chatBox').style.display = 'flex';
