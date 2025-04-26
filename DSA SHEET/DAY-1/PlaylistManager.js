function playlistManager(actions) {
    const result = [];
      actions.map((val) => {
        if(val.includes("addSong")) {
          const regex = /addSong\('([^']*)'\)/; // regex
          const match = val.match(regex);
          if(match) {
            result.push(match[1]);
          }
        } else {
          result.pop()
        }
      })
      return result;
  }