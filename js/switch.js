function changeDetails(detailID, buttonID) {
    var button = document.getElementById(buttonID)
    if (button.innerHTML == "Open details") {
      document.getElementById(detailID).open = true;
      button.innerHTML = "Close details"
    }
    else {
      document.getElementById(detailID).open = false;
      button.innerHTML = "Open details"
    }
}    