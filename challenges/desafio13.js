db.trips.aggregate(
  [
    {
      $match: {
        startTime: {
          $gte: ISODate("2016-03-10"),
          $lte: ISODate("2016-03-11"),
        },
      },
    },
    {
      $project: {
        tempoEmMinutos: {
          $divide: [{ $subtract: ["$stopTime", "$startTime"] }, 60000],
        },
      },
    },
    {
      $group: {
        _id: null,
        duracaoMediaEmMinutos: {
          $avg: "$tempoEmMinutos",
        },
      },
    },
    {
      $project: {
        _id: 0,
        duracaoMediaEmMinutos: {
          $ceil: "$duracaoMediaEmMinutos",
        },
      },
    },
  ],
);
