

exports.getAll = (Model) => (async (req, res) => {
    let filter = {};
    if (req.filterObj) {
        filter = req.filterObj;
    }
    // Build query
    // const documentsCounts = await Model.countDocuments();
    let query = Model.find(filter);
    console.log(query);
    // console.log(selectobj, "hhhhhhhhhhhhhhhhhhhh");

    // if (selectobj) {
    //     query = query.select(selectobj(res.__('LANG')));
    // }

    // if (populationOpt) {
    //     query = query.populate(populationOpt);
    // }
    // const apiOptions = new ApiOptions(query, req.query)
    //     .filter()
    //     .search(modelName, res.__('LANG'))
    //     .limitFields()
    //     .sort();

    // let documents = await apiOptions.mongooseQuery;
    // const documentsCounts = documents.length;
    // apiOptions.paginate(documentsCounts)

    // Execute query
    // const { mongooseQuery, paginationResult } = apiOptions;
    // documents = await mongooseQuery.clone().exec();
    // const document = await mongooseQuery;


    res.status(200).json(query);
});