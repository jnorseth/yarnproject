module.exports = (mongoose) => {
    const Pattern = mongoose.model(
      'patterns',
      mongoose.Schema({
        patternName: {
          type: String
        },
        patternLink: {
          type: String
        },
        weight: {
          type: Number,
        },
        fiberType: {
          type: String
        },
      })
    );
  
    return Pattern;
  };
