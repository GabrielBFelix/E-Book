module.exports = class APIFeatures {
    constructor(query, queryString) {
      this.query = query;
      this.queryString = queryString;
    }
  
    filter() {
      const queryObj = { ...this.queryString };
  
      const excludedFields = ['sort', 'limit', 'page', 'fields'];
  
      excludedFields.forEach((field) => {
        delete queryObj[field];
      });
  
      let queryStr = JSON.stringify(queryObj);
  
      queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);
  
      this.query = this.query.find(JSON.parse(queryStr));
  
      return this;
    }
  
    sort() {
      if (this.queryString.sort) {
        const sortBy = this.queryString.sort.split(',').join(' ');
        this.query = this.query.sort(sortBy);
      } else {
        this.query = this.query.sort('-createdAt');
      }
  
      return this;
    }
  
    limitFields() {
      if (this.queryString.limitFields) {
        const fields = this.queryString.split(',').join(' ');
        this.query = this.query.select(fields);
      } else {
        this.query = this.query.select('-__v');
      }
  
      return this;
    }
  
    paginate() {
      const page = this.queryString.page || 1;
      const limit = this.queryString.limit || 10;
      const skip = (page - 1) * limit;
  
      this.query = this.query.skip(skip).limit(limit);
  
      return this;
    }
  
  };
  