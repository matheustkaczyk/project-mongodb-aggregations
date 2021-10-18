db.movies.aggregate(
  [
    {
      $match: {
        languages: { $in: ["English"] },
      },
    },
    {
      $unwind: { path: "$cast" },
    },
    {
      $group: {
        _id: "$cast",
        numeroFilmes: {
          $sum: 1,
        },
        mediaIMDB: {
          $avg: "$imdb.rating",
        },
      },
    },
    {
      $project: {
        _id: 1,
        numeroFilmes: 1,
        mediaIMDB: { $round: ["$mediaIMDB", 1] },
      },
    },
    {
      $sort: {
        numeroFilmes: -1,
        _id: -1,
      },
    },
  ],
);