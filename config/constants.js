module.exports = {
    flightObj: {
      //Ballon
      SHIP: 'ballon', // Blimp
      BALL: 'ballon',

      // Airlines
      A318: 'airliner', 
      A319: 'airliner', 
      A19N: 'airliner', 
      A320: 'airliner', 
      A20N: 'airliner',
      A321: 'airliner',
      A21N: 'airliner',
      B731: 'airliner',
      B732: 'airliner',
      B733: 'airliner',
      B734: 'airliner',
      B735: 'airliner',
      B736: 'airliner',
      B737: 'airliner',
      B738: 'airliner',
      B739: 'airliner',
      J328: 'airliner', // 15t
      E170: 'airliner', // 38t
      'E75S/L': 'airliner',
      E75L: 'airliner',
      E75S: 'airliner',  // 40t
      A148: 'airliner',
      DC10: 'airliner',
      MD11: 'airliner',
      A306: 'airliner',
      A330: 'airliner',
      A332: 'airliner',
      A333: 'airliner',
      A338: 'airliner', // 800 neo
      A339: 'airliner',
      A359: 'airliner',
      A35K: 'airliner',
      B741: 'airliner',
      B742: 'airliner',
      B743: 'airliner',
      B744: 'airliner',
      B74D: 'airliner',
      B74S: 'airliner',
      B74R: 'airliner',
      BLCF: 'airliner',
      BSCA: 'airliner', // hah!
      B748: 'airliner',
      B752: 'airliner',
      B753: 'airliner',
      B772: 'airliner', // all pretty similar except for length
      B773: 'airliner',
      B77L: 'airliner',
      B77W: 'airliner',
      E190: 'airliner', // 52t
      E195: 'airliner', // 52t
      E290: 'airliner', // 56t
      E295: 'airliner', // 62t
      BCS1: 'airliner', // 64t
      BCS3: 'airliner',
      IL62: 'airliner',
      A225: 'airliner',
      DLTA: 'airliner',
      B764: 'airliner',
      B763: 'airliner',

      //B707
      RJ70: 'b707', // 38t
      RJ85: 'b707', // 42t
      RJ1H: 'b707', // 44t
      B461: 'b707', // 44t
      B462: 'b707', // 44t
      B463: 'b707',
      B701: 'b707',
      B703: 'b707',
      K35R: 'b707',
      K35E: 'b707',
      A124: 'b707',

      //JET Swept
      FA20: 'jet_swept', // 13t
      C680: 'jet_swept', // 14t
      C68A: 'jet_swept', // 14t
      YK40: 'jet_swept', // 16t
      C750: 'jet_swept', // 17t
      FA50: 'jet_swept', // 18t
      CL30: 'jet_swept', // 14t
      CL35: 'jet_swept',
      F900: 'jet_swept', // 21t
      CL60: 'jet_swept', // 22t
      GLEX: 'jet_swept',
      G200: 'jet_swept', // 16t
      G280: 'jet_swept', // 18t
      HA4T: 'jet_swept', // 18t
      GL5T: 'jet_swept',
      FA7X: 'jet_swept', // 29t
      FA8X: 'jet_swept', // 33t
      GLF2: 'jet_swept', // 29t
      GLF3: 'jet_swept', // 31t
      GLF4: 'jet_swept', // 34t
      GA5C: 'jet_swept', // 34t
      GLF5: 'jet_swept', // 41t
      GA6C: 'jet_swept', // 41t
      GLF6: 'jet_swept',
      E135: 'jet_swept', // 20t
      E35L: 'jet_swept', // 24t
      E145: 'jet_swept', // 22t
      E45X: 'jet_swept', // 24t
      CRJ1: 'jet_swept', // 24t
      CRJ2: 'jet_swept', // 24t
      CRJ7: 'jet_swept', // 34t
      CRJ9: 'jet_swept', // 38t
      CRJX: 'jet_swept', // 41t
      DC91: 'jet_swept',     
      DC92: 'jet_swept',
      DC93: 'jet_swept',
      DC94: 'jet_swept',
      DC95: 'jet_swept',
      MD80: 'jet_swept', // 60t
      MD81: 'jet_swept',
      MD82: 'jet_swept',
      MD83: 'jet_swept',
      MD87: 'jet_swept',
      MD88: 'jet_swept', // 72t
      MD90: 'jet_swept',
      B712: 'jet_swept', // 54t
      F100: 'jet_swept',
      B721: 'jet_swept', // 80t
      B722: 'jet_swept', // 80t
      T154: 'jet_swept', // 100t

      //JET NON-SWEPT
      BE40: 'jet_nonswept', // 7.3t
      FA10: 'jet_nonswept', // 8t
      C501: 'jet_nonswept',
      C510: 'jet_nonswept',
      C25A: 'jet_nonswept',
      C25B: 'jet_nonswept',
      C25C: 'jet_nonswept',
      C525: 'jet_nonswept',
      C550: 'jet_nonswept',
      C560: 'jet_nonswept',
      C56X: 'jet_nonswept', // 9t
      LJ23: 'jet_nonswept',
      LJ24: 'jet_nonswept',
      LJ25: 'jet_nonswept',
      LJ28: 'jet_nonswept',
      LJ31: 'jet_nonswept',
      LJ35: 'jet_nonswept', // 8t
      LR35: 'jet_nonswept', // wrong but in DB
      LJ40: 'jet_nonswept',
      LJ45: 'jet_nonswept',
      LR45: 'jet_nonswept', // wrong but in DB
      LJ55: 'jet_nonswept',
      LJ60: 'jet_nonswept', // 10t
      LJ70: 'jet_nonswept',
      LJ75: 'jet_nonswept',
      LJ85: 'jet_nonswept',
      C650: 'jet_nonswept', // 11t
      ASTR: 'jet_nonswept', // 11t
      G150: 'jet_nonswept', // 11t
      H25A: 'jet_nonswept', // 11t
      H25B: 'jet_nonswept', // 11t
      H25C: 'jet_nonswept',
      PRM1: 'jet_nonswept',
      E55P: 'jet_nonswept',
      E50P: 'jet_nonswept',
      EA50: 'jet_nonswept',
      HDJT: 'jet_nonswept',
      SF50: 'jet_nonswept',
      BE20: 'jet_nonswept',
      C208: 'jet_nonswept',
      C700: 'jet_nonswept',

      //Fighter Jet
      A37: 'hi_perf',
      A700: 'hi_perf',
      LEOP: 'hi_perf',
      ME62: 'hi_perf',
      T2: 'hi_perf',
      T37: 'hi_perf',
      T38: 'hi_perf',
      A10: 'hi_perf',
      A3: 'hi_perf',
      A6: 'hi_perf',
      AJET: 'hi_perf',
      AT3: 'hi_perf',
      CKUO: 'hi_perf',
      EUFI: 'hi_perf',
      SB39: 'hi_perf',
      MIR2: 'hi_perf',
      F1: 'hi_perf',
      F111: 'hi_perf',
      F117: 'hi_perf',
      F14: 'hi_perf',
      F15: 'hi_perf',
      F16: 'hi_perf',
      F18: 'hi_perf',
      F18H: 'hi_perf',
      F18S: 'hi_perf',
      F22: 'hi_perf',
      F22A: 'hi_perf',
      F35: 'hi_perf',
      VF35: 'hi_perf',
      L159: 'hi_perf',
      L39: 'hi_perf',
      F4: 'hi_perf',
      F5: 'hi_perf',
      HUNT: 'hi_perf',
      LANC: 'hi_perf',
      B17: 'hi_perf',
      B29: 'hi_perf',
      J8A: 'hi_perf',
      J8B: 'hi_perf',
      JH7: 'hi_perf',
      LTNG: 'hi_perf',
      METR: 'hi_perf',
      MG19: 'hi_perf',
      MG25: 'hi_perf',
      MG29: 'hi_perf',
      MG31: 'hi_perf',
      MG44: 'hi_perf',
      MIR4: 'hi_perf',
      MT2: 'hi_perf',
      Q5: 'hi_perf',
      RFAL: 'hi_perf',
      S3: 'hi_perf',
      S37: 'hi_perf',
      SR71: 'hi_perf',
      SU15: 'hi_perf',
      SU24: 'hi_perf',
      SU25: 'hi_perf',
      SU27: 'hi_perf',
      T22M: 'hi_perf',
      T4: 'hi_perf',
      TOR: 'hi_perf',
      A4: 'hi_perf',
      TU22: 'hi_perf',
      VAUT: 'hi_perf',
      Y130: 'hi_perf',
      YK28: 'hi_perf',
      MRF1: 'hi_perf',
      M326: 'hi_perf',
      M339: 'hi_perf',
      FOUG: 'hi_perf',
      V22F: 'hi_perf',
      V22: 'hi_perf',
      HAWK: 'hi_perf',

      //Military Loading
      U2: 'military_loading',
      C2: 'military_loading',
      C130: 'military_loading',
      C30J: 'military_loading',
      P3: 'military_loading',
      A400: 'military_loading',
      B52: 'military_loading',
      C17: 'military_loading',
      C5M: 'military_loading',
      E3TF: 'military_loading',
      E3CF: 'military_loading',

      //DRONE
      DRON: 'uav',
      Q1: 'uav',
      Q4: 'uav',
      Q9: 'uav',
      Q25: 'uav',
      GYRO: 'uav',

      //HELICOPTER
      H64: 'helicopter',
    // 4 bladed heavy helicopters
      H60: 'helicopter',
      S92: 'helicopter',
      NH90: 'helicopter',

      // Puma, Super Puma, Oryx, Cougar (ICAO'S AS32 & AS3B & PUMA)
      AS32: 'helicopter',
      AS3B: 'helicopter',
      PUMA: 'helicopter',

      TIGR: 'helicopter',
      MI24: 'helicopter',
      AS65: 'helicopter',
      GAZL: 'helicopter', 
      AS50: 'helicopter', 
      AS55: 'helicopter', 
      R44: 'helicopter', 

      // 5 bladed
      EC55: 'helicopter',
      A169: 'helicopter',
      H160: 'helicopter',
      A139: 'helicopter',
      EC75: 'helicopter',
      A189: 'helicopter',
      A149: 'helicopter',
      S61: 'helicopter',
      S61R: 'helicopter',
      EC25: 'helicopter', 
      H53: 'helicopter',
      H53S: 'helicopter',

      //2 Seater
      SR20: '2_seater',
      SR22: '2_seater',
      S22T: '2_seater',
      VEZE: '2_seater',
      PA24: '2_seater',
      BE36: '2_seater',

      //Chinook
      H47: 'chinook'

    }
}