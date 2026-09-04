/**
 * AELEX Architectural Hardware — Reusable Product Size Dialog System
 * 
 * Reusable dynamic size chart modal system supporting Brass Hinges, Brass Towerbolts,
 * and Steel & Aluminium Fittings products.
 * Data source: Official AELEX Brochure.
 */

(function () {
  'use strict';

  // Central AELEX Brochure Dataset for Brass Hinges, Brass Towerbolts & Steel & Aluminium Fittings
  const aelexBrochureDataset = {
    // =========================================================================
    // BRASS HINGES PORTFOLIO
    // =========================================================================
    "brass-hinges-l-locking": {
      category: "BRASS HINGES",
      name: "BRASS HINGES L-LOCKIN",
      sizeChart: {
        headers: ["Code No.", "Size (MM)", "Size (Inches)", "Thickness", "Pcs/Box", "Pcs/Case", "Screw Size"],
        rows: [
          // 2.0MM Thickness
          ["BHLA01", "75x9", "3x3/8", "2.0 MM", "10", "200", "6x15"],
          ["BHLA02", "75x12", "3x1/2", "2.0 MM", "10", "200", "6x15"],
          ["BHLA03", "75x19", "3x3/4", "2.0 MM", "10", "200", "6x15"],
          ["BHLA04", "75x25", "3x1", "2.0 MM", "10", "200", "6x15"],
          ["BHLA05", "100x9", "4x3/8", "2.0 MM", "10", "200", "6x15"],
          ["BHLA06", "100x12", "4x1/2", "2.0 MM", "10", "200", "6x15"],
          ["BHLA07", "100x19", "4x3/4", "2.0 MM", "10", "200", "6x15"],
          ["BHLA08", "100x25", "4x1", "2.0 MM", "10", "200", "6x15"],
          ["BHLA09", "75x9", "3x3/8", "2.0 MM", "10", "200", "6x15"],
          ["BHLA10", "75x12", "3x1/2", "2.0 MM", "10", "200", "6x15"],
          ["BHLA11", "75x19", "3x3/4", "2.0 MM", "10", "200", "6x15"],
          ["BHLA12", "75x25", "3x1", "2.0 MM", "10", "200", "6x15"],
          ["BHLA13", "100x9", "4x3/8", "2.0 MM", "10", "200", "6x15"],
          ["BHLA14", "100x12", "4x1/2", "2.0 MM", "10", "200", "6x15"],
          ["BHLA15", "100x19", "4x3/4", "2.0 MM", "10", "200", "6x15"],
          ["BHLA16", "100x25", "4x1", "2.0 MM", "10", "200", "6x15"],
          ["BHLA17", "75x9", "3x3/8", "2.0 MM", "10", "200", "6x15"],
          ["BHLA18", "75x12", "3x1/2", "2.0 MM", "10", "200", "6x15"],
          ["BHLA19", "75x19", "3x3/4", "2.0 MM", "10", "200", "6x15"],
          ["BHLA20", "75x25", "3x1", "2.0 MM", "10", "200", "6x15"],
          ["BHLA21", "100x9", "4x3/8", "2.0 MM", "10", "200", "6x15"],
          ["BHLA22", "100x12", "4x1/2", "2.0 MM", "10", "200", "6x15"],
          ["BHLA23", "100x19", "4x3/4", "2.0 MM", "10", "200", "6x15"],
          ["BHLA24", "100x25", "4x1", "2.0 MM", "10", "200", "6x15"],
          ["BHLA25", "75x12", "3x1/2", "2.0 MM", "10", "200", "6x15"],
          ["BHLA26", "75x19", "3x3/4", "2.0 MM", "10", "200", "6x15"],
          ["BHLA27", "75x25", "3x1", "2.0 MM", "10", "200", "6x15"],
          ["BHLA28", "100x12", "4x1/2", "2.0 MM", "10", "200", "6x15"],
          ["BHLA29", "100x19", "4x3/4", "2.0 MM", "10", "200", "6x15"],
          ["BHLA30", "100x25", "4x1", "2.0 MM", "10", "200", "6x15"],

          // 2.5MM Thickness
          ["BHLA31", "75x9", "3x3/8", "2.5 MM", "10", "200", "6x15"],
          ["BHLA32", "75x12", "3x1/2", "2.5 MM", "10", "200", "6x15"],
          ["BHLA33", "75x19", "3x3/4", "2.5 MM", "10", "200", "6x15"],
          ["BHLA34", "75x25", "3x1", "2.5 MM", "10", "200", "6x15"],
          ["BHLA35", "100x9", "4x3/8", "2.5 MM", "10", "200", "6x15"],
          ["BHLA36", "100x12", "4x1/2", "2.5 MM", "10", "200", "6x15"],
          ["BHLA37", "100x19", "4x3/4", "2.5 MM", "10", "200", "6x15"],
          ["BHLA38", "100x25", "4x1", "2.5 MM", "10", "200", "6x15"],
          ["BHLA39", "75x9", "3x3/8", "2.5 MM", "10", "200", "6x15"],
          ["BHLA40", "75x12", "3x1/2", "2.5 MM", "10", "200", "6x15"],
          ["BHLA41", "75x19", "3x3/4", "2.5 MM", "10", "200", "6x15"],
          ["BHLA42", "75x25", "3x1", "2.5 MM", "10", "200", "6x15"],
          ["BHLA43", "100x9", "4x3/8", "2.5 MM", "10", "200", "6x15"],
          ["BHLA44", "100x12", "4x1/2", "2.5 MM", "10", "200", "6x15"],
          ["BHLA45", "100x19", "4x3/4", "2.5 MM", "10", "200", "6x15"],
          ["BHLA46", "100x25", "4x1", "2.5 MM", "10", "200", "6x15"],
          ["BHLA47", "75x9", "3x3/8", "2.5 MM", "10", "200", "6x15"],
          ["BHLA48", "75x12", "3x1/2", "2.5 MM", "10", "200", "6x15"],
          ["BHLA49", "75x19", "3x3/4", "2.5 MM", "10", "200", "6x15"],
          ["BHLA50", "75x25", "3x1", "2.5 MM", "10", "200", "6x15"],
          ["BHLA51", "100x9", "4x3/8", "2.5 MM", "10", "200", "6x15"],
          ["BHLA52", "100x12", "4x1/2", "2.5 MM", "10", "200", "6x15"],
          ["BHLA53", "100x19", "4x3/4", "2.5 MM", "10", "200", "6x15"],
          ["BHLA54", "100x25", "4x1", "2.5 MM", "10", "200", "6x15"],
          ["BHLA55", "75x12", "3x1/2", "2.5 MM", "10", "200", "6x15"],
          ["BHLA56", "75x19", "3x3/4", "2.5 MM", "10", "200", "6x15"],
          ["BHLA57", "75x25", "3x1", "2.5 MM", "10", "200", "6x15"],
          ["BHLA58", "100x12", "4x1/2", "2.5 MM", "10", "200", "6x15"],
          ["BHLA59", "100x19", "4x3/4", "2.5 MM", "10", "200", "6x15"],
          ["BHLA60", "100x25", "4x1", "2.5 MM", "10", "200", "6x15"]
        ]
      }
    },
    "brass-hinges-bearing-italian-tip": {
      category: "BRASS HINGES",
      name: "BRASS HINGES BEARING ITALIAN TIP",
      sizeChart: {
        headers: ["Code No.", "Size (MM)", "Size (Inches)", "Thickness", "Pcs/Box", "Pcs/Case", "Screw Size"],
        rows: [
          ["BHBI01", "75x50x62", "3x2x2.5", "3.0 MM", "20", "240", "8x30"],
          ["BHBI02", "100x75", "4x3", "3.0 MM", "5", "80", "8x30"],
          ["BHBI03", "125x75", "5x3", "3.0 MM", "5", "60", "8x30"],
          ["BHBI04", "100x75", "4x3", "4.0 MM", "5", "80", "8x30"],
          ["BHBI05", "125x75", "5x3", "4.0 MM", "5", "60", "8x30"],
          ["BHBI06", "150x75", "6x3", "4.0 MM", "5", "50", "8x30"],
          ["BHBI07", "125x88", "5x3.1/2", "5.0 MM", "5", "60", "10x35"],
          ["BHBI08", "150x88", "6x3.1/2", "5.0 MM", "5", "50", "10x35"],
          ["BHBI09", "200x88", "8x3.1/2", "5.0 MM", "5", "30", "10x35"],
          ["BHBI10", "250x88", "10x3.1/2", "5.0 MM", "3", "24", "10x35"],
          ["BHBI11", "300x88", "12x3.1/2", "5.0 MM", "3", "24", "10x35"],
          ["BHBI12", "125x100", "5x4", "5.0 MM", "5", "60", "10x35"],
          ["BHBI13", "150x100", "6x4", "5.0 MM", "5", "50", "10x35"],
          ["BHBI14", "200x100", "8x4", "5.0 MM", "5", "30", "10x35"],
          ["BHBI15", "300x100", "12x4", "5.0 MM", "3", "24", "10x35"],
          ["BHBI16", "300x125", "12x5", "5.0 MM", "3", "24", "10x35"]
        ]
      }
    },
    "brass-hinges-bearing": {
      category: "BRASS HINGES",
      name: "BRASS HINGES BEARING",
      sizeChart: {
        headers: ["Code No.", "Size (MM)", "Size (Inches)", "Thickness", "Pcs/Box", "Pcs/Case", "Screw Size"],
        rows: [
          ["BHB01", "75x50x62", "3x2x2.5", "3.0 MM", "20", "240", "8x30"],
          ["BHB02", "100x75", "4x3", "3.0 MM", "5", "80", "8x30"],
          ["BHB03", "125x75", "5x3", "3.0 MM", "5", "60", "8x30"],
          ["BHB04", "100x75", "4x3", "4.0 MM", "5", "80", "8x30"],
          ["BHB05", "125x75", "5x3", "4.0 MM", "5", "60", "8x30"],
          ["BHB06", "150x75", "6x3", "4.0 MM", "5", "50", "8x30"],
          ["BHB07", "125x88", "5x3.1/2", "5.0 MM", "5", "60", "10x35"],
          ["BHB08", "150x88", "6x3.1/2", "5.0 MM", "5", "50", "10x35"],
          ["BHB09", "200x88", "8x3.1/2", "5.0 MM", "5", "30", "10x35"],
          ["BHB10", "250x88", "10x3.1/2", "5.0 MM", "3", "24", "10x35"],
          ["BHB11", "300x88", "12x3.1/2", "5.0 MM", "3", "24", "10x35"],
          ["BHB12", "125x100", "5x4", "5.0 MM", "5", "60", "10x35"],
          ["BHB13", "150x100", "6x4", "5.0 MM", "5", "50", "10x35"],
          ["BHB14", "200x100", "8x4", "5.0 MM", "5", "30", "10x35"],
          ["BHB15", "300x100", "12x4", "5.0 MM", "3", "24", "10x35"],
          ["BHB16", "300x125", "12x5", "5.0 MM", "3", "24", "10x35"]
        ]
      }
    },
    "brass-hinges-w-locking": {
      category: "BRASS HINGES",
      name: "BRASS HINGES W - LOCKING",
      sizeChart: {
        headers: ["Code No.", "Size (MM)", "Size (Inches)", "Thickness", "Pcs/Box", "Pcs/Case", "Screw Size"],
        rows: [
          ["BHWL01", "50 Regular", "Regular 2\"", "2.0 MM", "10", "120", "6x15"],
          ["BHWL02", "75 Regular", "Regular 3\"", "2.0 MM", "10", "120", "6x15"],
          ["BHWL03", "75x12x6", "3x1/2x6mm", "2.0 MM", "10", "120", "6x15"],
          ["BHWL04", "100x12x6", "4x1/2x6mm", "2.0 MM", "10", "120", "6x15"],
          ["BHWL05", "75x12x12", "3x1/2x12mm", "2.0 MM", "10", "120", "6x15"],
          ["BHWL06", "100x12x12", "4x1/2x12mm", "2.0 MM", "10", "120", "6x15"],
          ["BHWL07", "75x12x19", "3x1/2x19mm", "2.0 MM", "10", "120", "6x15"],
          ["BHWL08", "100x12x19", "4x1/2x19mm", "2.0 MM", "10", "120", "6x15"],
          ["BHWL09", "75x12x25", "3x1/2x25mm", "2.0 MM", "10", "120", "6x15"],
          ["BHWL10", "100x12x25", "4x1/2x25mm", "2.0 MM", "10", "120", "6x15"],
          ["BHWL11", "75x19x6", "3x3/4x6mm", "2.0 MM", "10", "120", "6x15"],
          ["BHWL12", "100x19x6", "4x3/4x6mm", "2.0 MM", "10", "120", "6x15"],
          ["BHWL13", "75x19x12", "3x3/4x12mm", "2.0 MM", "10", "120", "6x15"],
          ["BHWL14", "100x19x12", "4x3/4x12mm", "2.0 MM", "10", "120", "6x15"],
          ["BHWL15", "75x19x19", "3x3/4x19mm", "2.0 MM", "10", "120", "6x15"],
          ["BHWL16", "100x19x19", "4x3/4x19mm", "2.0 MM", "10", "120", "6x15"],
          ["BHWL17", "75x19x25", "3x3/4x25mm", "2.0 MM", "10", "120", "6x15"],
          ["BHWL18", "100x19x25", "4x3/4x25mm", "2.0 MM", "10", "120", "6x15"],
          ["BHWL19", "75x9x6", "3x3/8x6mm", "2.0 MM", "10", "120", "6x15"],
          ["BHWL20", "75x9x12", "3x3/8x12mm", "2.0 MM", "10", "120", "6x15"],
          ["BHWL21", "75x9x19", "3x3/8x19mm", "2.0 MM", "10", "120", "6x15"]
        ]
      }
    },
    "brass-hinges-railway": {
      category: "BRASS HINGES",
      name: "BRASS HINGES RAILWAY",
      sizeChart: {
        headers: ["Code No.", "Size (MM)", "Size (Inches)", "Thickness", "Pcs/Box", "Pcs/Case", "Screw Size"],
        rows: [
          ["BHRL08", "75x28x28", "3x1.1/8x1.1/8", "5/32 (4.0mm)", "10", "120", "8x30"],
          ["BHRL09", "75x31x31", "3x1.1/4x1.1/4", "5/32 (4.0mm)", "10", "120", "8x30"],
          ["BHRL10", "100x25x25", "4x1x1", "5/32 (4.0mm)", "5", "80", "8x30"],
          ["BHRL11", "100x28x28", "4x1.1/8x1.1/8", "5/32 (4.0mm)", "5", "80", "8x30"],
          ["BHRL12", "100x31x31", "4x1.1/4x1.1/4", "5/32 (4.0mm)", "5", "80", "8x30"],
          ["BHRL13", "125x25x25", "5x1x1", "5/32 (4.0mm)", "5", "60", "8x30"],
          ["BHRL14", "125x28x28", "5x1.1/8x1.1/8", "5/32 (4.0mm)", "5", "60", "8x30"],
          ["BHRL15", "125x31x31", "5x1.1/4x1.1/4", "5/32 (4.0mm)", "5", "60", "8x30"],
          ["BHRL16", "150x28x28", "6x1.1/8x1.1/8", "5/32 (4.0mm)", "5", "50", "8x30"],
          ["BHRL17", "150x31x31", "6x1.1/4x1.1/4", "5/32 (4.0mm)", "5", "50", "8x30"]
        ]
      }
    },
    "brass-hinges-parlament": {
      category: "BRASS HINGES",
      name: "BRASS HINGES PARLAMENT",
      sizeChart: {
        headers: ["Code No.", "Size (MM)", "Size (Inches)", "Pcs/Box", "Screw Size"],
        rows: [
          ["BHP01", "100x100", "4x4", "5", "8x30"],
          ["BHP02", "100x125", "4x5", "5", "8x30"],
          ["BHP03", "125x100", "5x4", "5", "8x30"],
          ["BHP04", "125x125", "5x5", "5", "8x30"],
          ["BHP05", "125x150", "5x6", "5", "8x30"],
          ["BHP06", "125x200", "5x8", "5", "8x30"],
          ["BHP07", "125x250", "5x10", "5", "8x30"]
        ]
      }
    },
    "brass-hinges-butt": {
      category: "BRASS HINGES",
      name: "BRASS HINGES BUTT",
      sizeChart: {
        headers: ["Code No.", "Size (MM)", "Size (Inches)", "Thickness", "Pcs/Box", "Pcs/Case", "Screw Size"],
        rows: [
          ["BHB01", "75x9x16", "3x3/8x5/8", "3/32 (2.5mm)", "20", "240", "6x15"],
          ["BHB02", "75x16x16", "3x3/8x5/8", "3/32 (2.5mm)", "20", "240", "6x15"],
          ["BHB03", "75x12x9", "3x1/2x3/4", "3/32 (2.5mm)", "20", "240", "6x15"],
          ["BHB04", "75x19x19", "3x3/4x3/4", "3/32 (2.5mm)", "20", "240", "6x15"],
          ["BHB05", "75x12x25", "3x1/2x1", "3/32 (2.5mm)", "20", "240", "6x15"],
          ["BHB06", "75x19x25", "3x3/4x1", "3/32 (2.5mm)", "20", "240", "6x15"],
          ["BHB07", "75x25x25", "3x1x1", "3/32 (2.5mm)", "20", "240", "6x15"],
          ["BHB08", "75x12x38", "3x1/2x1.1/2", "3/32 (2.5mm)", "20", "240", "6x15"],
          ["BHB09", "75x19x38", "3x3/4x1.1/2", "3/32 (2.5mm)", "20", "240", "6x15"],
          ["BHB10", "100x9x16", "4x3/8x5/8", "3/32 (2.5mm)", "20", "240", "6x15"],
          ["BHB11", "100x16x16", "4x5/8x5/8", "3/32 (2.5mm)", "20", "240", "6x15"],
          ["BHB12", "100x12x19", "4x1/2x3/4", "3/32 (2.5mm)", "20", "240", "6x15"],
          ["BHB13", "100x19x19", "4x3/4x3/4", "3/32 (2.5mm)", "20", "240", "6x15"],
          ["BHB14", "100x12x25", "4x1/2x1", "3/32 (2.5mm)", "20", "240", "6x15"],
          ["BHB15", "100x19x25", "4x3/4x1", "3/32 (2.5mm)", "20", "240", "6x15"],
          ["BHB16", "100x25x25", "4x1x1", "3/32 (2.5mm)", "20", "240", "6x15"],
          ["BHB17", "100x12x38", "4x1/2x1.1/2", "3/32 (2.5mm)", "20", "240", "6x15"],
          ["BHB18", "100x19x38", "4x3/4x1.1/2", "3/32 (2.5mm)", "20", "240", "6x15"]
        ]
      }
    },
    "brass-rly-hinges-spring-single-action": {
      category: "BRASS HINGES",
      name: "BRASS RLY HINGES SPRING (SINGLE ACTION)",
      sizeChart: {
        headers: ["Code No.", "Action", "Size (MM)", "Size (Inches)", "Pcs/Box", "Pcs/Case", "Screw Size"],
        rows: [
          ["BHS01", "Single Action", "100 MM", "4\"", "5", "80", "8x30"],
          ["BHS02", "Single Action", "125 MM", "5\"", "5", "60", "8x30"]
        ]
      }
    },
    "brass-rly-hinges-spring-double-action": {
      category: "BRASS HINGES",
      name: "BRASS RLY HINGES SPRING (DOUBLE ACTION)",
      sizeChart: {
        headers: ["Code No.", "Action", "Size (MM)", "Size (Inches)", "Pcs/Box", "Pcs/Case", "Screw Size"],
        rows: [
          ["BHS03", "Double Action", "100 MM", "4\"", "5", "48", "8x30"],
          ["BHS04", "Double Action", "125 MM", "5\"", "5", "36", "8x30"]
        ]
      }
    },
    "brass-rly-hinges-half-overlay": {
      category: "BRASS HINGES",
      name: "BRASS RLY HINGES HALF & FULL OVERLY",
      sizeCharts: [
        {
          title: "HALF OVERLY",
          headers: ["Code No.", "Size (MM)", "Size (Inches)", "Pcs/Box", "Pcs/Case", "Screw Size"],
          rows: [
            ["BHHO01", "19X19", "3\" (Half)", "5", "60", "6x20"],
            ["BHHO02", "19X19", "4\" (Half)", "5", "60", "6x20"],
            ["BHHO03", "19X25", "3\" (Half)", "5", "60", "6x20"],
            ["BHHO04", "19X25", "4\" (Half)", "5", "60", "6x20"],
            ["BHHO05", "25X25", "3\" (Half)", "5", "60", "6x20"],
            ["BHHO06", "25X25", "4\" (Half)", "5", "60", "6x20"],
            ["BHHO07", "25X19", "3\" (Half)", "5", "60", "6x20"],
            ["BHHO08", "25X19", "4\" (Half)", "5", "60", "6x20"],
            ["BHHO09", "32X25", "3\" (Half)", "5", "60", "6x20"],
            ["BHHO10", "32X25", "4\" (Half)", "5", "60", "6x20"]
          ]
        },
        {
          title: "FULL OVERLY",
          headers: ["Code No.", "Size (MM)", "Size (Inches)", "Pcs/Box", "Pcs/Case", "Screw Size"],
          rows: [
            ["BHFO01", "19X19", "3\" (Full)", "5", "60", "6x20"],
            ["BHFO02", "19X19", "4\" (Full)", "5", "60", "6x20"],
            ["BHFO03", "19X25", "3\" (Full)", "5", "60", "6x20"],
            ["BHFO04", "19X25", "4\" (Full)", "5", "60", "6x20"],
            ["BHFO05", "25X25", "3\" (Full)", "5", "60", "6x20"],
            ["BHFO06", "25X25", "4\" (Full)", "5", "60", "6x20"],
            ["BHFO07", "25X19", "3\" (Full)", "5", "60", "6x20"],
            ["BHFO08", "25X19", "4\" (Full)", "5", "60", "6x20"],
            ["BHFO09", "32X25", "3\" (Full)", "5", "60", "6x20"],
            ["BHFO10", "32X25", "4\" (Full)", "5", "60", "6x20"]
          ]
        }
      ]
    },
    "brass-rly-hinges-washer": {
      category: "BRASS HINGES",
      name: "BRASS RLY HINGES WASHER",
      sizeChart: {
        headers: ["Code No.", "Size (MM)", "Size (Inches)", "Thickness", "Pcs/Box", "Pcs/Case", "Screw Size"],
        rows: [
          ["BHW01", "75x25x25", "3x1x1", "1/8 (3.0mm)", "20", "240", "7x30"],
          ["BHW02", "100x25x25", "4x1x1", "1/8 (3.0mm)", "5", "80", "7x30"],
          ["BHW03", "100x28x28", "4x1.1/8x1.1/8", "1/8 (3.0mm)", "5", "80", "7x30"],
          ["BHW04", "125x25x25", "5x1x1", "1/8 (3.0mm)", "5", "60", "7x30"],
          ["BHW05", "125x28x28", "5x1.1/8x1.1/8", "1/8 (3.0mm)", "5", "60", "7x30"],
          ["BHW06", "100x25x25", "4x1x1", "5/32 (4.0mm)", "5", "80", "8x30"],
          ["BHW07", "100x28x28", "4x1.1/8x1.1/8", "5/32 (4.0mm)", "5", "80", "8x30"],
          ["BHW08", "100x31x31", "4x1.1/4x1.1/4", "5/32 (4.0mm)", "5", "80", "8x30"],
          ["BHW09", "125x25x25", "5x1x1", "5/32 (4.0mm)", "5", "60", "8x30"],
          ["BHW10", "125x28x28", "5x1.1/8x1.1/8", "5/32 (4.0mm)", "5", "60", "8x30"],
          ["BHW11", "125x31x31", "5x1.1/4x1.1/4", "5/32 (4.0mm)", "5", "60", "8x30"],
          ["BHW12", "150x28x28", "6x1.1/8x1.1/8", "5/32 (4.0mm)", "5", "50", "8x30"],
          ["BHW13", "150x31x31", "6x1.1/4x1.1/4", "5/32 (4.0mm)", "5", "50", "8x30"],
          ["BHW14", "100x38x38", "4x1.1/2x1.1/2", "3/16 (4.8mm)", "5", "80", "8x35"],
          ["BHW15", "125x31x31", "5x1.1/4x1.1/4", "3/16 (4.8mm)", "5", "60", "8x35"],
          ["BHW16", "125x38x38", "5x1.1/2x1.1/2", "3/16 (4.8mm)", "5", "60", "8x35"],
          ["BHW17", "125x50x50", "5x2x2", "3/16 (4.8mm)", "5", "40", "8x35"],
          ["BHW18", "150x31x31", "6x1.1/4x1.1/4", "3/16 (4.8mm)", "5", "50", "8x35"],
          ["BHW19", "150x38x38", "6x1.1/2x1.1/2", "3/16 (4.8mm)", "5", "50", "8x35"],
          ["BHW20", "150x50x50", "6x2x2", "3/16 (4.8mm)", "5", "30", "8x35"],
          ["BHW21", "200x31x31", "8x1.1/4x1.1/4", "3/16 (4.8mm)", "5", "30", "8x35"],
          ["BHW22", "200x38x38", "8x1.1/2x1.1/2", "3/16 (4.8mm)", "5", "30", "8x35"],
          ["BHW23", "200x50x50", "8x2x2", "3/16 (4.8mm)", "5", "20", "8x35"]
        ]
      }
    },
    "brass-hinges-z": {
      category: "BRASS HINGES",
      name: "BRASS HINGES Z",
      sizeChart: {
        headers: ["Code No.", "Size (MM)", "Size (Inches)", "Pcs/Box", "Pcs/Case", "Screw Size"],
        rows: [
          ["BHZ01", "75x12x12", "3x1/2x12MM", "10", "200", "6x15"],
          ["BHZ02", "100x12x12", "4x1/2x12MM", "10", "200", "6x15"],
          ["BHZ03", "75x19x18", "3x3/4x18MM", "10", "200", "6x15"],
          ["BHZ04", "100x19x18", "4x3/4x18MM", "10", "200", "6x15"],
          ["BHZ05", "75x25x25", "3x1x25MM", "10", "200", "6x15"],
          ["BHZ06", "100x25x25", "4x1x25MM", "10", "200", "6x15"]
        ]
      }
    },

    // =========================================================================
    // BRASS TOWER BOLT PORTFOLIO
    // =========================================================================
    "towerbolt-bullet-38": {
      category: "BRASS TOWER BOLT",
      name: "BRASS TOWER BOLT 3/8 (Dia. 9.5mm) - BULLET",
      sizeChart: {
        headers: ["Code No.", "Size (MM)", "Size (Inches)", "Pcs/Box", "Pcs/Case", "Screw Size"],
        rows: [
          ["BT13", "9.5x100", "3/8x4", "5", "100", "5x20"],
          ["BT14", "9.5x150", "3/8x6", "5", "60", "5x20"],
          ["BT15", "9.5x200", "3/8x8", "5", "50", "5x20"],
          ["BT16", "9.5x250", "3/8x10", "5", "30", "5x20"],
          ["BT17", "9.5x300", "3/8x12", "5", "30", "5x20"],
          ["BT18", "9.5x375", "3/8x15", "5", "36", "5x20"],
          ["BT19", "9.5x450", "3/8x18", "5", "36", "5x20"]
        ]
      }
    },
    "towerbolt-bullet-10mm": {
      category: "BRASS TOWER BOLT",
      name: "BRASS TOWER BOLT 10mm - BULLET",
      sizeChart: {
        headers: ["Code No.", "Size (MM)", "Size (Inches)", "Pcs/Box", "Pcs/Case", "Screw Size"],
        rows: [
          ["BT29", "10x100", "4\"", "5", "100", "5x25"],
          ["BT30", "10x150", "6\"", "5", "60", "5x25"],
          ["BT31", "10x200", "8\"", "5", "50", "5x25"],
          ["BT32", "10x250", "10\"", "5", "30", "5x25"],
          ["BT33", "10x300", "12\"", "5", "30", "5x25"],
          ["BT34", "10x375", "15\"", "3", "36", "5x25"],
          ["BT35", "10x450", "18\"", "3", "36", "5x25"],
          ["BT36", "10x600", "24\"", "3", "36", "5x25"]
        ]
      }
    },
    "towerbolt-mataka": {
      category: "BRASS TOWER BOLT",
      name: "BRASS TOWER BOLT MATAKA 10mm",
      sizeChart: {
        headers: ["Code No.", "Size (MM)", "Size (Inches)", "Pcs/Box", "Pcs/Case", "Screw Size"],
        rows: [
          ["BT20", "10x100", "4\"", "5", "100", "5x25"],
          ["BT21", "10x150", "6\"", "5", "60", "5x25"],
          ["BT22", "10x200", "8\"", "5", "50", "5x25"],
          ["BT23", "10x250", "10\"", "5", "30", "5x25"],
          ["BT24", "10x300", "12\"", "5", "30", "5x25"],
          ["BT25", "10x375", "15\"", "3", "36", "5x25"],
          ["BT26", "10x450", "18\"", "3", "36", "5x25"],
          ["BT27", "10x600", "24\"", "3", "36", "5x25"],
          ["BT28", "10x750", "30\"", "3", "24", "5x25"]
        ]
      }
    },
    "towerbolt-hex": {
      category: "BRASS TOWER BOLT",
      name: "BRASS TOWER BOLT HEX",
      sizeChart: {
        headers: ["Code No.", "Size (MM)", "Size (Inches)", "Pcs/Box", "Pcs/Case", "Screw Size"],
        rows: [
          ["BT07", "9.5x75", "3/8x3", "10", "120", "5x20"],
          ["BT08", "9.5x100", "3/8x4", "5", "100", "5x20"],
          ["BT09", "9.5x150", "3/8x6", "5", "60", "5x20"],
          ["BT10", "9.5x200", "3/8x8", "5", "50", "5x20"],
          ["BT11", "9.5x250", "3/8x10", "5", "30", "5x20"],
          ["BT12", "9.5x300", "3/8x12", "5", "30", "5x20"]
        ]
      }
    },
    "towerbolt-round": {
      category: "BRASS TOWER BOLT",
      name: "BRASS TOWER BOLT ROUND",
      sizeChart: {
        headers: ["Code No.", "Size (MM)", "Size (Inches)", "Pcs/Box", "Pcs/Case", "Screw Size"],
        rows: [
          ["BT01", "9.5x75", "3/8x3", "10", "120", "5x20"],
          ["BT02", "9.5x100", "3/8x4", "5", "100", "5x20"],
          ["BT03", "9.5x150", "3/8x6", "5", "60", "5x20"],
          ["BT04", "9.5x200", "3/8x8", "5", "50", "5x20"],
          ["BT05", "9.5x250", "3/8x10", "5", "30", "5x20"],
          ["BT06", "9.5x300", "3/8x12", "5", "30", "5x20"]
        ]
      }
    },
    "towerbolt-cruz": {
      category: "BRASS TOWER BOLT",
      name: "BRASS TOWER BOLT CRUZ",
      sizeChart: {
        headers: ["Code No.", "Size (MM)", "Size (Inches)", "Pcs/Box", "Pcs/Case", "Screw Size"],
        rows: [
          ["BT88", "100", "4\"", "5", "100", "6x20"],
          ["BT89", "150", "6\"", "5", "60", "6x20"],
          ["BT90", "200", "8\"", "5", "50", "6x20"],
          ["BT91", "250", "10\"", "5", "30", "6x20"],
          ["BT92", "300", "12\"", "5", "30", "6x20"]
        ]
      }
    },
    "towerbolt-mexico-nx": {
      category: "BRASS TOWER BOLT",
      name: "BRASS TOWER BOLT MEXICO NX",
      sizeChart: {
        headers: ["Code No.", "Size (MM)", "Size (Inches)", "Pcs/Box", "Pcs/Case", "Screw Size"],
        rows: [
          ["BT93", "75", "3\"", "10", "120", "5x20"],
          ["BT94", "100", "4\"", "5", "100", "5x20"],
          ["BT95", "150", "6\"", "5", "60", "5x20"],
          ["BT96", "200", "8\"", "5", "50", "5x20"],
          ["BT97", "250", "10\"", "5", "30", "5x20"],
          ["BT98", "300", "12\"", "5", "30", "5x20"]
        ]
      }
    },
    "towerbolt-tapper-95mm": {
      category: "BRASS TOWER BOLT",
      name: "BRASS TOWER BOLT TAPPER 9.5mm",
      sizeChart: {
        headers: ["Code No.", "Size (MM)", "Size (Inches)", "Pcs/Box", "Pcs/Case", "Screw Size"],
        rows: [
          ["BT99", "100", "4\"", "5", "100", "6x20"],
          ["BT100", "150", "6\"", "5", "60", "6x20"],
          ["BT101", "200", "8\"", "5", "50", "6x20"],
          ["BT102", "250", "10\"", "5", "30", "6x20"],
          ["BT103", "300", "12\"", "5", "30", "6x20"],
          ["BT104", "375", "15\"", "3", "36", "6x20"],
          ["BT105", "450", "18\"", "3", "36", "6x20"],
          ["BT106", "600", "24\"", "3", "36", "6x20"],
          ["BT107", "750", "30\"", "3", "36", "6x20"]
        ]
      }
    },
    "towerbolt-neck": {
      category: "BRASS TOWER BOLT",
      name: "BRASS TOWER BOLT NECK",
      sizeChart: {
        headers: ["Code No.", "Size (MM)", "Size (Inches)", "Pcs/Box", "Pcs/Case", "Screw Size"],
        rows: [
          ["BT114", "75", "3\"", "10", "120", "5x20"],
          ["BT115", "100", "4\"", "5", "100", "5x20"],
          ["BT116", "150", "6\"", "5", "60", "5x20"],
          ["BT117", "200", "8\"", "5", "50", "5x20"],
          ["BT118", "250", "10\"", "5", "30", "5x20"],
          ["BT119", "300", "12\"", "5", "30", "5x20"],
          ["BT120", "375", "15\"", "3", "36", "5x20"],
          ["BT121", "450", "18\"", "3", "36", "5x20"],
          ["BT122", "600", "24\"", "3", "36", "5x20"],
          ["PT123", "750", "30\"", "3", "36", "5x20"]
        ]
      }
    },
    "towerbolt-tapper-nx-8mm": {
      category: "BRASS TOWER BOLT",
      name: "BRASS TOWER BOLT TAPPER NX 8mm",
      sizeChart: {
        headers: ["Code No.", "Size (MM)", "Size (Inches)", "Pcs/Box", "Pcs/Case", "Screw Size"],
        rows: [
          ["BT108", "75", "3\"", "10", "120", "5x20"],
          ["BT109", "100", "4\"", "5", "100", "5x20"],
          ["BT110", "150", "6\"", "5", "60", "5x20"],
          ["BT111", "200", "8\"", "5", "50", "5x20"],
          ["BT112", "250", "10\"", "5", "30", "5x20"],
          ["BT113", "300", "12\"", "3", "36", "5x20"]
        ]
      }
    },
    "towerbolt-tapper-neck": {
      category: "BRASS TOWER BOLT",
      name: "BRASS TOWER BOLT TAPPER NECK",
      sizeChart: {
        headers: ["Code No.", "Size (MM)", "Size (Inches)", "Pcs/Box", "Pcs/Case", "Screw Size"],
        rows: [
          ["BT124", "75", "3\"", "10", "120", "6x20"],
          ["BT125", "100", "4\"", "5", "100", "6x20"],
          ["BT126", "150", "6\"", "5", "60", "6x20"],
          ["BT127", "200", "8\"", "5", "50", "6x20"],
          ["BT128", "250", "10\"", "5", "30", "6x20"],
          ["BT129", "300", "12\"", "5", "30", "6x20"],
          ["BT130", "375", "15\"", "3", "36", "6x20"],
          ["BT131", "450", "18\"", "3", "36", "6x20"],
          ["BT132", "600", "24\"", "3", "36", "6x20"]
        ]
      }
    },
    "towerbolt-tapper-12mm": {
      category: "BRASS TOWER BOLT",
      name: "BRASS TOWER BOLT TAPPER 12mm",
      sizeChart: {
        headers: ["Code No.", "Size (MM)", "Size (Inches)", "Pcs/Box", "Screw Size"],
        rows: [
          ["BT108", "150", "6\"", "3", "7x30"],
          ["BT104", "200", "8\"", "3", "7x30"],
          ["BT107", "250", "10\"", "3", "7x30"],
          ["BT105", "300", "12\"", "3", "7x30"],
          ["BT110", "450", "18\"", "1", "7x30"],
          ["BT111", "600", "24\"", "1", "7x30"],
          ["BT112", "750", "30\"", "1", "7x30"],
          ["BT137", "900", "36\"", "1", "7x30"],
          ["BT114", "1200", "48\"", "1", "7x30"]
        ]
      }
    },
    "towerbolt-super-neck": {
      category: "BRASS TOWER BOLT",
      name: "BRASS TOWER BOLT SUPER NECK",
      sizeChart: {
        headers: ["Code No.", "Size (MM)", "Size (Inches)", "Pcs/Box", "Pcs/Case"],
        rows: [
          ["BT133", "75", "3\"", "10", "120"],
          ["BT134", "100", "4\"", "5", "100"],
          ["BT135", "150", "6\"", "5", "60"],
          ["BT136", "200", "8\"", "5", "50"],
          ["BT137", "250", "10\"", "5", "30"],
          ["BT138", "300", "12\"", "5", "30"],
          ["BT139", "375", "15\"", "3", "36"],
          ["BT140", "450", "18\"", "3", "36"],
          ["BT141", "600", "24\"", "3", "36"]
        ]
      }
    },
    "towerbolt-royal": {
      category: "BRASS TOWER BOLT",
      name: "BRASS TOWER BOLT ROYAL",
      sizeChart: {
        headers: ["Code No.", "Size (MM)", "Size (Inches)", "Pcs/Box", "Pcs/Case", "Screw Size"],
        rows: [
          ["BT142", "100", "4\"", "5", "100", "6x20"],
          ["BT143", "150", "6\"", "5", "60", "6x20"],
          ["BT144", "200", "8\"", "5", "50", "6x20"],
          ["BT145", "250", "10\"", "5", "30", "6x20"],
          ["BT146", "300", "12\"", "5", "30", "6x20"]
        ]
      }
    },
    "towerbolt-baby-latch": {
      category: "BRASS TOWER BOLT",
      name: "BRASS BABY LATCH",
      sizeChart: {
        headers: ["Code No.", "Size (MM)", "Size (Inches)", "Pcs/Box", "Pcs/Case", "Screw Size"],
        rows: [
          ["BT164", "Square x 75", "3\"", "5", "60", "5x25"]
        ]
      }
    },
    "towerbolt-zen": {
      category: "BRASS TOWER BOLT",
      name: "BRASS TOWER BOLT ZEN",
      sizeChart: {
        headers: ["Code No.", "Size (MM)", "Size (Inches)", "Pcs/Box", "Pcs/Case", "Screw Size"],
        rows: [
          ["BT165", "Zen x 75", "3\"", "10", "120", "5x20"],
          ["BT166", "Zen x 100", "4\"", "5", "100", "5x20"]
        ]
      }
    },
    "towerbolt-capsul": {
      category: "BRASS TOWER BOLT",
      name: "BRASS TOWER BOLT CAPSUL",
      sizeChart: {
        headers: ["Code No.", "Size (MM)", "Size (Inches)", "Pcs/Box", "Pcs/Case", "Screw Size"],
        rows: [
          ["BT147", "100", "4\"", "5", "100", "6x20"],
          ["BT148", "150", "6\"", "5", "60", "6x20"],
          ["BT149", "200", "8\"", "5", "50", "6x20"],
          ["BT150", "250", "10\"", "5", "30", "6x20"],
          ["BT151", "300", "12\"", "5", "30", "6x20"],
          ["BT152", "375", "15\"", "3", "36", "6x20"],
          ["BT153", "450", "18\"", "3", "36", "6x20"],
          ["BT154", "600", "24\"", "3", "36", "6x20"]
        ]
      }
    },
    "towerbolt-flush": {
      category: "BRASS TOWER BOLT",
      name: "BRASS TOWER BOLT FLUSH",
      sizeChart: {
        headers: ["Code No.", "Size (MM)", "Size (Inches)", "Pcs/Box", "Pcs/Case", "Screw Size"],
        rows: [
          ["BT155", "100", "4\"", "5", "100", "6x20"],
          ["BT156", "150", "6\"", "5", "60", "6x20"],
          ["BT157", "200", "8\"", "5", "50", "6x20"],
          ["BT158", "250", "10\"", "5", "30", "6x20"],
          ["BT159", "300", "12\"", "5", "30", "6x20"],
          ["BT160", "375", "15\"", "3", "36", "6x20"],
          ["BT161", "450", "18\"", "3", "36", "6x20"],
          ["BT162", "600", "24\"", "3", "36", "6x20"],
          ["BT163", "750", "30\"", "3", "36", "6x20"]
        ]
      }
    },

    // =========================================================================
    // STEEL & ALUMINIUM FITTINGS PORTFOLIO
    // =========================================================================

    // 1. STEEL TOWER BOLT DIA 10 MM & 12 MM (Combines ST01-ST07 and ST13-ST19)
    "steel-tower-bolt-round-10mm": {
      category: "STEEL & ALUMINIUM FITTINGS",
      name: "STEEL TOWER BOLT DIA 10 MM & 12 MM",
      sizeChart: {
        headers: ["Diameter", "Code No.", "Size (MM)", "Size (Inches)", "Pcs/Box", "Pcs/Case", "Screw Size"],
        rows: [
          // DIA 10 MM
          ["10 MM", "ST01", "100", "4\"", "10", "240", "6x20"],
          ["10 MM", "ST02", "150", "6\"", "10", "200", "6x20"],
          ["10 MM", "ST03", "200", "8\"", "10", "160", "6x20"],
          ["10 MM", "ST04", "250", "10\"", "10", "120", "6x20"],
          ["10 MM", "ST05", "300", "12\"", "10", "120", "6x20"],
          ["10 MM", "ST06", "450", "18\"", "5", "90", "6x20"],
          ["10 MM", "ST07", "600", "24\"", "5", "60", "6x20"],
          // DIA 12 MM
          ["12 MM", "ST13", "100", "4\"", "10", "240", "6x25"],
          ["12 MM", "ST14", "150", "6\"", "10", "200", "6x25"],
          ["12 MM", "ST15", "200", "8\"", "10", "160", "6x25"],
          ["12 MM", "ST16", "250", "10\"", "10", "120", "6x25"],
          ["12 MM", "ST17", "300", "12\"", "10", "120", "6x25"],
          ["12 MM", "ST18", "450", "18\"", "5", "90", "6x25"],
          ["12 MM", "ST19", "600", "24\"", "5", "60", "6x25"]
        ]
      }
    },

    // 2. STEEL HINGES WELDED (SH01 - SH16 COMPLETE BROCHURE DATA)
    "steel-hinges-welded": {
      category: "STEEL & ALUMINIUM FITTINGS",
      name: "STEEL HINGES WELDED",
      sizeChart: {
        headers: ["Code No.", "Size (MM)", "Pcs/Box", "Pcs/Case", "Screw Size"],
        rows: [
          ["SH01", "3x1/2x3/4", "50", "1200", "6x20"],
          ["SH02", "3x3/4x3/4", "40", "960", "6x20"],
          ["SH03", "3x1/2x1", "40", "960", "6x20"],
          ["SH04", "3x3/4x1", "40", "960", "6x20"],
          ["SH05", "3x1x1", "30", "720", "7x20"],
          ["SH06", "3x16", "40", "960", "6x20"],
          ["SH07", "3x14", "30", "720", "7x20"],
          ["SH08", "4x14", "25", "375", "7x25"],
          ["SH09", "5x14", "20", "300", "7x30"],
          ["SH10", "3x12", "20", "480", "7x25"],
          ["SH11", "4x12", "20", "300", "8x30"],
          ["SH12", "5x12", "15", "225", "8x30"],
          ["SH13", "6x12", "10", "150", "8x30"],
          ["SH14", "5x10", "12", "180", "8x35"],
          ["SH15", "6x10", "10", "150", "8x35"],
          ["SH16", "4\" Stone Hinges", "25", "375", "-"]
        ]
      }
    },
    "aluminium-tower-bolt-10mm": {
      category: "STEEL & ALUMINIUM FITTINGS",
      name: "STEEL HINGES WELDED",
      sizeChart: {
        headers: ["Code No.", "Size (MM)", "Pcs/Box", "Pcs/Case", "Screw Size"],
        rows: [
          ["SH01", "3x1/2x3/4", "50", "1200", "6x20"],
          ["SH02", "3x3/4x3/4", "40", "960", "6x20"],
          ["SH03", "3x1/2x1", "40", "960", "6x20"],
          ["SH04", "3x3/4x1", "40", "960", "6x20"],
          ["SH05", "3x1x1", "30", "720", "7x20"],
          ["SH06", "3x16", "40", "960", "6x20"],
          ["SH07", "3x14", "30", "720", "7x20"],
          ["SH08", "4x14", "25", "375", "7x25"],
          ["SH09", "5x14", "20", "300", "7x30"],
          ["SH10", "3x12", "20", "480", "7x25"],
          ["SH11", "4x12", "20", "300", "8x30"],
          ["SH12", "5x12", "15", "225", "8x30"],
          ["SH13", "6x12", "10", "150", "8x30"],
          ["SH14", "5x10", "12", "180", "8x35"],
          ["SH15", "6x10", "10", "150", "8x35"],
          ["SH16", "4\" Stone Hinges", "25", "375", "-"]
        ]
      }
    },

    // 3. STEEL TOWERBOLT ALUMINIUM (AL01 - AL11 ONLY)
    "steel-tower-bolt-heavy": {
      category: "STEEL & ALUMINIUM FITTINGS",
      name: "STEEL TOWERBOLT ALUMINIUM",
      sizeChart: {
        headers: ["Code No.", "Variant/Type", "Size (MM)", "Size (Inches)", "Pcs/Box", "Pcs/Case", "Screw Size"],
        rows: [
          ["AL01", "Tapper 9.5mm", "100", "4\"", "5", "240", "6x20"],
          ["AL02", "Tapper 9.5mm", "150", "6\"", "5", "200", "6x20"],
          ["AL03", "Tapper 9.5mm", "200", "8\"", "5", "160", "6x20"],
          ["AL04", "Tapper 9.5mm", "250", "10\"", "5", "120", "6x20"],
          ["AL05", "Tapper 9.5mm", "300", "12\"", "5", "80", "6x20"],
          ["AL06", "Tapper 9.5mm", "450", "18\"", "5", "80", "6x20"],
          ["AL07", "Tapper 9.5mm", "600", "24\"", "5", "80", "6x20"],
          ["AL08", "Tapper NX 8mm", "100", "4\"", "5", "240", "5x20"],
          ["AL09", "Tapper NX 8mm", "150", "6\"", "5", "200", "5x20"],
          ["AL10", "Tapper NX 8mm", "200", "8\"", "5", "160", "5x20"],
          ["AL11", "Tapper NX 8mm", "300", "12\"", "5", "80", "5x20"]
        ]
      }
    },
    "steel-towerbolt-aluminium": {
      category: "STEEL & ALUMINIUM FITTINGS",
      name: "STEEL TOWERBOLT ALUMINIUM",
      sizeChart: {
        headers: ["Code No.", "Variant/Type", "Size (MM)", "Size (Inches)", "Pcs/Box", "Pcs/Case", "Screw Size"],
        rows: [
          ["AL01", "Tapper 9.5mm", "100", "4\"", "5", "240", "6x20"],
          ["AL02", "Tapper 9.5mm", "150", "6\"", "5", "200", "6x20"],
          ["AL03", "Tapper 9.5mm", "200", "8\"", "5", "160", "6x20"],
          ["AL04", "Tapper 9.5mm", "250", "10\"", "5", "120", "6x20"],
          ["AL05", "Tapper 9.5mm", "300", "12\"", "5", "80", "6x20"],
          ["AL06", "Tapper 9.5mm", "450", "18\"", "5", "80", "6x20"],
          ["AL07", "Tapper 9.5mm", "600", "24\"", "5", "80", "6x20"],
          ["AL08", "Tapper NX 8mm", "100", "4\"", "5", "240", "5x20"],
          ["AL09", "Tapper NX 8mm", "150", "6\"", "5", "200", "5x20"],
          ["AL10", "Tapper NX 8mm", "200", "8\"", "5", "160", "5x20"],
          ["AL11", "Tapper NX 8mm", "300", "12\"", "5", "80", "5x20"]
        ]
      }
    },

    // 4. STEEL TOWERBOLT NECK (STN01 - STN05 ONLY)
    "steel-tower-bolt-neck": {
      category: "STEEL & ALUMINIUM FITTINGS",
      name: "STEEL TOWERBOLT NECK",
      sizeChart: {
        headers: ["Code No.", "Size (MM)", "Size (Inches)", "Pcs/Box", "Pcs/Case", "Screw Size"],
        rows: [
          ["STN01", "100", "4\"", "10", "240", "5x25"],
          ["STN02", "150", "6\"", "10", "200", "5x25"],
          ["STN03", "200", "8\"", "10", "160", "5x25"],
          ["STN04", "250", "10\"", "10", "120", "5x25"],
          ["STN05", "300", "12\"", "10", "120", "5x25"]
        ]
      }
    },
    "aluminium-tower-bolt-12mm": {
      category: "STEEL & ALUMINIUM FITTINGS",
      name: "STEEL TOWERBOLT NECK",
      sizeChart: {
        headers: ["Code No.", "Size (MM)", "Size (Inches)", "Pcs/Box", "Pcs/Case", "Screw Size"],
        rows: [
          ["STN01", "100", "4\"", "10", "240", "5x25"],
          ["STN02", "150", "6\"", "10", "200", "5x25"],
          ["STN03", "200", "8\"", "10", "160", "5x25"],
          ["STN04", "250", "10\"", "10", "120", "5x25"],
          ["STN05", "300", "12\"", "10", "120", "5x25"]
        ]
      }
    },

    "steel-tower-bolt-12mm-square": {
      category: "STEEL & ALUMINIUM FITTINGS",
      name: "STEEL TOWER BOLT Dia. 12mm SQUARE",
      sizeChart: {
        headers: ["Code No.", "Size (MM)", "Size (Inches)", "Pcs/Box", "Pcs/Case", "Screw Size"],
        rows: [
          ["ST13", "100", "4\"", "10", "240", "6x25"],
          ["ST14", "150", "6\"", "10", "200", "6x25"],
          ["ST15", "200", "8\"", "10", "160", "6x25"],
          ["ST16", "250", "10\"", "10", "120", "6x25"],
          ["ST17", "300", "12\"", "10", "120", "6x25"],
          ["ST18", "450", "18\"", "5", "90", "6x25"],
          ["ST19", "600", "24\"", "5", "60", "6x25"]
        ]
      }
    },
    "aluminium-tower-bolt-maxico": {
      category: "STEEL & ALUMINIUM FITTINGS",
      name: "TOWER BOLT ALUMINIUM MAXICO",
      sizeChart: {
        headers: ["Code No.", "Size (MM)", "Size (Inches)", "Pcs/Box", "Pcs/Case", "Screw Size"],
        rows: [
          ["AL12", "100", "4\"", "5", "240", "6x20"],
          ["AL13", "150", "6\"", "5", "200", "6x20"],
          ["AL14", "200", "8\"", "5", "160", "6x20"],
          ["AL15", "300", "12\"", "5", "80", "6x20"]
        ]
      }
    },
    "aluminium-tower-bolt-superneck": {
      category: "STEEL & ALUMINIUM FITTINGS",
      name: "TOWER BOLT ALUMINIUM SUPER NECK",
      sizeChart: {
        headers: ["Code No.", "Size (MM)", "Size (Inches)", "Pcs/Box", "Pcs/Case", "Screw Size"],
        rows: [
          ["AL30", "100", "4\"", "5", "240", "5x25"],
          ["AL31", "150", "6\"", "5", "200", "5x25"],
          ["AL32", "200", "8\"", "5", "160", "5x25"],
          ["AL33", "250", "10\"", "5", "80", "5x25"],
          ["AL34", "300", "12\"", "5", "80", "5x25"],
          ["AL35", "450", "18\"", "5", "36", "5x25"],
          ["AL36", "600", "24\"", "5", "36", "5x25"]
        ]
      }
    }
  };

  let activeTriggerElement = null;

  function initSizeDialog() {
    // Prevent duplicate initialization across scripts or dynamic events
    if (window.aelexProductDialogInitialized || window.__aelexSizeDialogControllerInitialized) return;

    const dialogOverlay = document.getElementById('aelex-size-dialog');
    if (!dialogOverlay) return;

    window.aelexProductDialogInitialized = true;
    window.__aelexSizeDialogControllerInitialized = true;

    const dialogCloseBtn = document.getElementById('aelex-dialog-close');
    const dialogCategory = document.querySelector('.aelex-dialog-category');
    const dialogTitle = document.getElementById('dialog-product-name');
    const dialogImg = document.getElementById('dialog-product-image');
    const tableWrapper = document.getElementById('dialog-table-wrapper');
    const dialogContainer = dialogOverlay.querySelector('.aelex-dialog-container');

    // 1. RESET DIALOG STATE (CLEARS STALE IMAGE, TEXT, TABLE & SCROLL)
    function resetDialog() {
      if (dialogImg) {
        dialogImg.src = '';
        dialogImg.alt = '';
      }
      if (dialogTitle) dialogTitle.textContent = '';
      if (dialogCategory) dialogCategory.textContent = '';
      if (tableWrapper) tableWrapper.innerHTML = '';
      if (dialogContainer) dialogContainer.scrollTop = 0;
      if (tableWrapper) tableWrapper.scrollTop = 0;
    }

    // 2. OPEN DIALOG FLOW
    function openProductDialog(productId, cardElement) {
      const productData = aelexBrochureDataset[productId];
      if (!productData) {
        console.warn('No brochure dataset found for product ID:', productId);
        return;
      }

      // Step A: Reset previous state
      resetDialog();

      // Step B: Load exact image from clicked product card
      const cardImg = cardElement ? cardElement.querySelector('.asym-product-img') : null;
      if (cardImg && dialogImg) {
        dialogImg.src = cardImg.getAttribute('src');
        dialogImg.alt = productData.name;
      }

      // Step C: Set Category & Title
      if (dialogCategory && productData.category) {
        dialogCategory.textContent = productData.category;
      }
      if (dialogTitle) {
        dialogTitle.textContent = productData.name;
      }

      // Step D: Render Size Table(s)
      if (tableWrapper) {
        if (productData.sizeCharts && Array.isArray(productData.sizeCharts)) {
          // Render Multiple Labeled Size Charts (e.g. HALF OVERLY & FULL OVERLY)
          let html = '';
          productData.sizeCharts.forEach((chart) => {
            html += `<div class="aelex-chart-group-header">
                       <span class="aelex-accent-line"></span>
                       <h4 class="aelex-chart-group-title">${escapeHTML(chart.title)}</h4>
                     </div>`;
            html += `<div class="aelex-table-inner-wrap" style="overflow-x:auto; margin-bottom: 1.25rem;">
                       <table class="aelex-size-table"><thead><tr>`;
            chart.headers.forEach(h => {
              html += `<th>${escapeHTML(h)}</th>`;
            });
            html += `</tr></thead><tbody>`;
            chart.rows.forEach(row => {
              html += `<tr>`;
              row.forEach((cell, cellIdx) => {
                const isCode = cellIdx === 0;
                html += `<td ${isCode ? 'class="cell-code"' : ''}>${escapeHTML(cell)}</td>`;
              });
              html += `</tr>`;
            });
            html += `</tbody></table></div>`;
          });
          tableWrapper.innerHTML = html;
        } else if (productData.sizeChart) {
          // Render Single Size Chart
          let html = `<table class="aelex-size-table" id="dialog-size-table">
                        <thead id="dialog-table-head"><tr>`;
          productData.sizeChart.headers.forEach(h => {
            html += `<th>${escapeHTML(h)}</th>`;
          });
          html += `</tr></thead><tbody id="dialog-table-body">`;
          productData.sizeChart.rows.forEach(row => {
            html += `<tr>`;
            row.forEach((cell, cellIdx) => {
              const isCode = cellIdx === 0;
              html += `<td ${isCode ? 'class="cell-code"' : ''}>${escapeHTML(cell)}</td>`;
            });
            html += `</tr>`;
          });
          html += `</tbody></table>`;
          tableWrapper.innerHTML = html;
        }
      }

      // Step E: Display Dialog & Lock Body Scroll
      dialogOverlay.setAttribute('aria-hidden', 'false');
      dialogOverlay.classList.add('is-open');
      document.body.classList.add('aelex-dialog-open');

      if (dialogCloseBtn) {
        setTimeout(() => dialogCloseBtn.focus(), 50);
      }
    }

    // 3. CLOSE DIALOG FLOW
    function closeProductDialog() {
      if (!dialogOverlay.classList.contains('is-open')) return;

      dialogOverlay.classList.remove('is-open');
      dialogOverlay.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('aelex-dialog-open');

      resetDialog();

      // Safe Focus Restoration (Prevents mobile focus jump / touch interference)
      if (activeTriggerElement && typeof activeTriggerElement.focus === 'function' && window.innerWidth >= 1024) {
        try { activeTriggerElement.focus({ preventScroll: true }); } catch (err) {}
      }
    }

    // 4. UNIFIED PRODUCT CLICK DELEGATION HANDLER (RESPONSIVE VIEWPORT DELEGATION)
    function handleProductTrigger(e) {
      if (e.target.closest('#mobile-nav-drawer') || e.target.closest('#aelex-size-dialog')) return;

      const isMobileOrTablet = window.innerWidth <= 1024;

      if (isMobileOrTablet) {
        // Mobile & Tablet (<= 1024px): Tapping anywhere on the product card opens the dialog
        const card = e.target.closest('.asym-product-card');
        if (!card) return;

        const btn = card.querySelector('.asym-explore-btn');
        const productId = card.getAttribute('data-product-id') || (btn ? btn.getAttribute('data-product-id') : null);

        if (!productId) return;

        // Block default link navigation & parent bubbling
        e.preventDefault();
        e.stopPropagation();

        activeTriggerElement = btn || card;
        openProductDialog(productId, card);
      } else {
        // Desktop (> 1024px): Only clicking the EXPLORE FURTHER button opens the dialog
        const btn = e.target.closest('.asym-explore-btn');
        if (!btn) return;

        const card = btn.closest('.asym-product-card');
        const productId = btn.getAttribute('data-product-id') || (card ? card.getAttribute('data-product-id') : null);

        if (!productId) return;

        // Block default link navigation & parent bubbling
        e.preventDefault();
        e.stopPropagation();

        activeTriggerElement = btn;
        openProductDialog(productId, card);
      }
    }

    // Single Capture-Phase Document Delegation: Unified click event handling across all viewports
    document.addEventListener('click', handleProductTrigger, true);

    // Single Close Listeners
    if (dialogCloseBtn) {
      dialogCloseBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        closeProductDialog();
      });
    }

    dialogOverlay.addEventListener('click', (e) => {
      if (e.target === dialogOverlay) {
        e.preventDefault();
        e.stopPropagation();
        closeProductDialog();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && dialogOverlay.classList.contains('is-open')) {
        closeProductDialog();
      }
    });
  }

  function escapeHTML(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSizeDialog);
  } else {
    initSizeDialog();
  }
})();

