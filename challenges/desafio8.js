db.air_routes.aggregate(
  [
    {
      $match: {
        airplane: {
          $in: ["747", "380"],
        },
      },
    },
    {
      $lookup: {
        from: "air_alliances",
        localField: "airline.name",
        foreignField: "airlines",
        as: "alliances",
      },
    },
    {
      $unwind: {
        path: "$alliances",
      },
    },
    {
      $group: {
        _id: "$alliances.name",
        totalRotas: { $sum: 1 },
      },
    },
    {
      $sort: {
        totalRotas: -1,
      },
    },
    {
      $limit: 1,
    },
  ],
);

// db.air_alliances.aggregate(
//   [
//     {
//       $lookup: {
//         from: "air_routes",
//         localField: "airlines",
//         foreignField: "airline.name",
//         as: "plane",
//       },
//     },
//     {
//       $unwind: {
//         path: "$plane",
//       },
//     },
//     {
//       $match: {
//         "plane.airplane": {
//           $in: ["747", "380"],
//         },
//       },
//     },
//     {
//       $group: {
//         _id: "$name",
//         totalRotas: {
//           $sum: 1,
//         },
//       },
//     },
//     {
//       $sort: {
//         totalRotas: -1,
//       },
//     },
//     {
//       $limit: 1,
//     },
//   ],
// );
