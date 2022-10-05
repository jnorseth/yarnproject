module.exports = (mongoose) => {
    const Yarn = mongoose.model(
      'yarns',
      mongoose.Schema({
        yarnName: {
          type: String
        },
        yarnBrand: {
            type: String
          },
          weight: {
          type: Number
        },
        recHookNeedleSize: {
            needleSize: {
                type: String
            },
            hookSize: {
                type: String
            }
        },
        colors: {
            type: String
        },
        size: {
            type: String
        },
        fiberType: {
          type: String
        },
      })
    );
  
    return Yarn;
  };
