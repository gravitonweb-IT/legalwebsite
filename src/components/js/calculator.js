/* 
  *********************
    GST Calculate Rangeinput
  *********************
*/

var intrestamount = "";
var rategst = "";
var Check;
var yourstate;
var customerstate;

var statename = [
    "Select",
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttarakhand",
    "Uttar Pradesh",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli and Daman & Diu",
    "Delhi",
    "Jammu & Kashmir",
    "Ladakh",
    "Lakshadweep",
    "Puducherry",
];

// let txt2 = $(".cstate").text("Text.");
let setlect_options = "";

for (let i = 0; i < statename.length; i++) {
    setlect_options += `<option value="${statename[i]}"> ${statename[i]} </option>`;
}
$(".ystate").html(setlect_options);
$(".cstate").html(setlect_options);

$(".ystate").change(function () {
    yourstate = $(".ystate").val();
});

$(".cstate").change(function () {
    customerstate = $(".cstate").val();
});

$(".addremove").change(function () {
    Check = $(".addremove:checked").val();
});

$(".intrest_amou_input").change(function () {
    intrestamount = $(".intrest_amou_input").val();
    $("#intrest_amou_range").val(intrestamount);
});

$("#intrest_amou_range").change(function () {
    intrestamount = $("#intrest_amou_range").val();
    $(".intrest_amou_input").val(intrestamount);
});

$("#rate_gst_range").change(function () {
    rategst = $("#rate_gst_range").val();
    $(".rate_gst_input").val(rategst);
});

$(".rate_gst_input").change(function () {
    rategst = $(".rate_gst_input").val();
    $("#rate_gst_range").val(rategst);
});

function calculate() {
    if (intrestamount != "") {
        $(".initial_am_v").css("display", "none");
        if (intrestamount > 0) {
            $(".gst_f0valid").css("display", "none");
            if (intrestamount < 100000000 || intrestamount == 100000000) {
                $(".gst_f10cvalid").css("display", "none");

                if (rategst != "") {
                    $(".rate_gst_valid").css("display", "none");
                    if (rategst > 0) {
                        $(".rate_gst0__v").css("display", "none");
                        if (rategst < 29) {
                            $(".rate_gst1__v").css("display", "none");
                            if ($(".ystate").val() != "Select") {
                                $(".yourstate_gst__v").css("display", "none");
                                if ($(".cstate").val() != "Select") {
                                    $(".cusyomerstate_gst__v").css(
                                        "display",
                                        "none"
                                    );

                                    if (intrestamount > 0 && rategst > 0) {
                                        if (yourstate === customerstate) {
                                            if (
                                                Check === "Add_GST" ||
                                                $(
                                                    ".addremove:checked"
                                                ).val() === "Add_GST"
                                            ) {
                                                /* GST Exclusive  (Add GST) */
                                                $(".net_amount").text(
                                                    "₹ " + intrestamount + "/-"
                                                );

                                                var gst =
                                                    (Number(intrestamount) *
                                                        Number(rategst)) /
                                                    100;

                                                $(".gstamount").text(
                                                    "₹ " + gst + "/-"
                                                );

                                                var totalamount =
                                                    Number(intrestamount) +
                                                    Number(gst);
                                                $(".totalgst").text(
                                                    "₹ " + totalamount + "/-"
                                                );

                                                var sgstcgst = Number(gst) / 2;
                                                $(".sgst").text(
                                                    "₹ " +
                                                        sgstcgst.toFixed(2) +
                                                        "/-"
                                                );
                                                $(".cgst").text(
                                                    "₹ " +
                                                        sgstcgst.toFixed(2) +
                                                        "/-"
                                                );
                                                $(".igst").text(
                                                    "₹ " + 0 + "/-"
                                                );

                                                //  Check =  $("#addremove:checked").val()
                                            } else if (Check === "Remove_GST") {
                                                $(".net_amount").text(
                                                    "₹ " + intrestamount + "/-"
                                                );

                                                var gst =
                                                    Number(intrestamount) -
                                                    Number(intrestamount) *
                                                        (100 /
                                                            (100 +
                                                                Number(
                                                                    rategst
                                                                )));

                                                $(".gstamount").text(
                                                    "₹ " + gst.toFixed(2) + "/-"
                                                );

                                                var total =
                                                    Number(intrestamount) -
                                                    Number(gst);
                                                $(".totalgst").text(
                                                    "₹ " +
                                                        total.toFixed(2) +
                                                        "/-"
                                                );

                                                var sgstcgst = Number(gst) / 2;
                                                $(".sgst").text(
                                                    "₹ " +
                                                        sgstcgst.toFixed(2) +
                                                        "/-"
                                                );
                                                $(".cgst").text(
                                                    "₹ " +
                                                        sgstcgst.toFixed(2) +
                                                        "/-"
                                                );
                                                $(".igst").text(
                                                    "₹ " + 0 + "/-"
                                                );
                                            }
                                        } else if (yourstate != customerstate) {
                                            /*  GST Inclusive  (Remove GST)  */
                                            if (
                                                Check === "Add_GST" ||
                                                $(
                                                    ".addremove:checked"
                                                ).val() === "Add_GST"
                                            ) {
                                                $(".net_amount").text(
                                                    "₹ " + intrestamount + "/-"
                                                );

                                                var gst =
                                                    (Number(intrestamount) *
                                                        Number(rategst)) /
                                                    100;

                                                $(".gstamount").text(
                                                    "₹ " + gst + "/-"
                                                );

                                                var totalamount =
                                                    Number(intrestamount) +
                                                    Number(gst);
                                                $(".totalgst").text(
                                                    "₹ " + totalamount + "/-"
                                                );

                                                $(".sgst").text(
                                                    "₹ " + 0 + "/-"
                                                );
                                                $(".cgst").text(
                                                    "₹ " + 0 + "/-"
                                                );
                                                $(".igst").text(
                                                    "₹ " + gst.toFixed(2) + "/-"
                                                );
                                            } else if (Check === "Remove_GST") {
                                                $(".net_amount").text(
                                                    "₹ " + intrestamount + "/-"
                                                );

                                                var gst =
                                                    Number(intrestamount) -
                                                    Number(intrestamount) *
                                                        (100 /
                                                            (100 +
                                                                Number(
                                                                    rategst
                                                                )));

                                                $(".gstamount").text(
                                                    "₹ " + gst.toFixed(2) + "/-"
                                                );

                                                var total =
                                                    Number(intrestamount) -
                                                    Number(gst);
                                                $(".totalgst").text(
                                                    "₹ " +
                                                        total.toFixed(2) +
                                                        "/-"
                                                );

                                                $(".sgst").text(
                                                    "₹ " + 0 + "/-"
                                                );
                                                $(".cgst").text(
                                                    "₹ " + 0 + "/-"
                                                );
                                                $(".igst").text(
                                                    "₹ " + gst.toFixed(2) + "/-"
                                                );
                                            }
                                        }
                                    }
                                } else {
                                    $(".cusyomerstate_gst__v").css(
                                        "display",
                                        "block"
                                    );
                                }
                            } else {
                                $(".yourstate_gst__v").css("display", "block");
                            }
                        } else {
                            $(".rate_gst0__v").css("display", "none");
                            $(".rate_gst1__v").css("display", "block");
                        }
                    } else {
                        $(".rate_gst1__v").css("display", "none");
                        $(".rate_gst0__v").css("display", "block");
                    }
                } else {
                    $(".rate_gst_valid").css("display", "block");
                }
            } else {
                $(".gst_f10cvalid").css("display", "block");
            }
        } else {
            $(".gst_f0valid").css("display", "block");
        }
    } else {
        $(".initial_am_v").css("display", "block");
    }
}

/* 
  *********************
    SIP Calculate 
  *********************
*/

// mainfunction();

$(".btn-color-mode-switch-inner").change(function () {
    // console.log($(".btn-color-mode-switch-inner"));
    // console.log(intrestamount);
});

var Sip_monthly_inv = "";
var Sip_intrest_r = "";
var Sip_time_p = "";
var Sip_M;
var Sip_inmonth;
var Sip_monthly_rate;
var Sip_a;
var Sip_b;
var Sip_in_amount;
var sip_est_ret;
var sipcheck;

$("#sip_month_inv").change(function () {
    Sip_monthly_inv = $("#sip_month_inv").val();
    $(".sip_month_inv_input").val(Sip_monthly_inv);
});

$(".sip_month_inv_input").change(function () {
    Sip_monthly_inv = $(".sip_month_inv_input").val();
    $("#sip_month_inv").val(Sip_monthly_inv);
});

$("#sip_intrest_rate").change(function () {
    Sip_intrest_r = $("#sip_intrest_rate").val();
    $(".sip_intrest_rate_input").val(Sip_intrest_r);
});

$(".sip_intrest_rate_input").change(function () {
    Sip_intrest_r = $(".sip_intrest_rate_input").val();
    $("#sip_intrest_rate").val(Sip_intrest_r);
});

$("#sip_time_period").change(function () {
    Sip_time_p = $("#sip_time_period").val();
    $(".sip_time_period_input").val(Sip_time_p);
});

$(".sip_time_period_input").change(function () {
    Sip_time_p = $(".sip_time_period_input").val();
    $("#sip_time_period").val(Sip_time_p);
});

$(".siptoggle").change(function () {
    sipcheck = $(".siptoggle:checked").val();
});
sipcheck = $(".siptoggle:checked").val();
/* 
  *********************
    SIP Calculate Rangeinput
  *********************
*/

function sipcalculate() {
    if (Sip_monthly_inv != "") {
        $(".monthly_investment_v").css("display", "none");
        if (Sip_monthly_inv > 0) {
            $(".val_f_0").css("display", "none");
            if (Sip_monthly_inv < 100000000 || Sip_monthly_inv == 100000000) {
                $(".val_f_cr").css("display", "none");

                if (Sip_intrest_r != "") {
                    $(".rate_interest_v").css("display", "none");
                    if (Sip_intrest_r > 0) {
                        $(".val_f_0per").css("display", "none");
                        if (Sip_intrest_r < 51) {
                            $(".val_f_51per").css("display", "none");

                            if (Sip_time_p != "") {
                                $(".time_period_v").css("display", "none");

                                if (Sip_time_p > 0) {
                                    $(".val_f_0time_sip").css(
                                        "display",
                                        "none"
                                    );
                                    if (Sip_time_p < 51) {
                                        $(".val_f_50time_sip").css(
                                            "display",
                                            "none"
                                        );

                                        if (sipcheck === "Yearly") {
                                            $(".time_p_sip").text(
                                                Sip_time_p + " Years"
                                            );

                                            Sip_inmonth = Sip_time_p * 12;

                                            Sip_monthly_rate =
                                                Sip_intrest_r / 12 / 100;

                                            Sip_a = Math.pow(
                                                1 + Sip_monthly_rate,
                                                Sip_inmonth
                                            );

                                            Sip_b =
                                                (Sip_a - 1) / Sip_monthly_rate;

                                            Sip_M = Math.round(
                                                Sip_monthly_inv *
                                                    Sip_b *
                                                    (1 + Sip_monthly_rate)
                                            );
                                            /* total */

                                            $(".total_sip").text("₹ " + Sip_M);

                                            /* inves am */
                                            Sip_in_amount =
                                                Sip_monthly_inv * Sip_inmonth;

                                            $(".invest_am_sip").text(
                                                "₹ " + Sip_in_amount
                                            );

                                            /* est re */
                                            sip_est_ret = Sip_M - Sip_in_amount;
                                            $(".est_r_sip").text(
                                                "₹ " + sip_est_ret
                                            );
                                            result();
                                        } else if (sipcheck === "Monthly") {
                                            $(".time_p_sip").text(
                                                Sip_time_p + " Years"
                                            );

                                            Sip_inmonth = Sip_time_p;

                                            Sip_monthly_rate =
                                                Sip_intrest_r / 12 / 100;

                                            Sip_a = Math.pow(
                                                1 + Sip_monthly_rate,
                                                Sip_inmonth
                                            );

                                            Sip_b =
                                                (Sip_a - 1) / Sip_monthly_rate;

                                            Sip_M = Math.round(
                                                Sip_monthly_inv *
                                                    Sip_b *
                                                    (1 + Sip_monthly_rate)
                                            );
                                            /* total */

                                            $(".total_sip").text("₹ " + Sip_M);

                                            /* inves am */
                                            Sip_in_amount =
                                                Sip_monthly_inv * Sip_inmonth;

                                            $(".invest_am_sip").text(
                                                "₹ " + Sip_in_amount
                                            );

                                            /* est re */
                                            sip_est_ret = Sip_M - Sip_in_amount;
                                            $(".est_r_sip").text(
                                                "₹ " + sip_est_ret
                                            );
                                            result();
                                        }
                                    } else {
                                        $(".val_f_50time_sip").css(
                                            "display",
                                            "block"
                                        );
                                    }
                                } else {
                                    $(".val_f_0time_sip").css(
                                        "display",
                                        "block"
                                    );
                                }
                            } else {
                                $(".time_period_v").css("display", "block");
                                $(".val_f_0time_sip").css("display", "none");
                                $(".val_f_50time_sip").css("display", "none");
                            }
                        } else {
                            $(".val_f_51per").css("display", "block");
                        }
                    } else {
                        $(".val_f_0per").css("display", "block");
                    }
                } else {
                    $(".rate_interest_v").css("display", "block");
                    $(".val_f_0per").css("display", "none");
                    $(".val_f_51per").css("display", "none");
                }
            } else {
                $(".val_f_cr").css("display", "block");
            }
        } else {
            $(".val_f_0").css("display", "block");
        }
    } else {
        $(".monthly_investment_v").css("display", "block");
        $(".val_f_0").css("display", "none");
        $(".val_f_cr").css("display", "none");
    }

    //  console.log(Sip_M - Sip_in_amount);
}

function result() {
    // $("#container").highcharts().destroy();
    Sip_monthly_inv = parseInt(Sip_monthly_inv);
    Sip_M = parseInt(Sip_M);
    mainfunction();
    // $('#container').highcharts().series[0].setData([129.2, 144.0, 200000])
}

/* SIP GRAPH */

var sip_d = new Date();
var sip_year = sip_d.getFullYear();

function mainfunction() {
    $("#container").highcharts({
        chart: {
            type: "spline",
        },
        title: {
            text: "",
        },
        subtitle: {
            text: "",
        },
        xAxis: {
            type: "datetime",
            labels: {
                overflow: "justify",
            },
        },
        yAxis: {
            title: {
                text: "",
            },
            min: 0,
            minorGridLineWidth: 0,
            gridLineWidth: 0,
            alternateGridColor: null,
            plotBands: [],
        },
        tooltip: {
            valueSuffix: " ",
        },
        plotOptions: {
            spline: {
                lineWidth: 4,
                states: {
                    hover: {
                        lineWidth: 3,
                    },
                },
                marker: {
                    enabled: false,
                },
                pointInterval: 86400000 * 365,
                pointStart: Date.UTC(sip_year, 7, 17),
            },
        },
        colors: ["#01355D", "#1AB81A", "#F8951D"],
        series: [
            {
                name: "Capital gains",
                data: [0, Number(sip_est_ret)],
            },

            {
                name: "Investment amount",
                data: [0, Number(Sip_in_amount)],
            },
            {
                name: "SIP est returns",
                data: [0, Number(Sip_M)],
            },
        ],
        accessibility: {
            enabled: false,
        },
        navigation: {
            menuItemStyle: {
                fontSize: "15px",
            },
        },
    });
}

/* 
  *********************
    FD CALCULATOR  
  *********************
*/

var deposit_fd = "";
var rate_fd = "";
var time_p_fd = "";
var fd_switch_mon_yer;

$("#deposit_am").change(function () {
    deposit_fd = $("#deposit_am").val();
    $(".deposit_am_range").val(deposit_fd);
});

$(".deposit_am_range").change(function () {
    deposit_fd = $(".deposit_am_range").val();
    $("#deposit_am").val(deposit_fd);
});

$("#rate_int").change(function () {
    rate_fd = $("#rate_int").val();
    $(".fd_intrest_range").val(rate_fd);
});

$(".fd_intrest_range").change(function () {
    rate_fd = $(".fd_intrest_range").val();
    $("#rate_int").val(rate_fd);
});

$("#time_period").change(function () {
    time_p_fd = $("#time_period").val();
    $(".fd_time_period_range").val(time_p_fd);
    $(".time_p_fd_yr").text(time_p_fd + " Years,");
});

$(".fd_time_period_range").change(function () {
    time_p_fd = $(".fd_time_period_range").val();
    $("#time_period").val(time_p_fd);
    $(".time_p_fd_yr").text(time_p_fd + " Years,");
});

$(".fdtoggle").change(function () {
    fd_switch_mon_yer = $(".fdtoggle:checked").val();
    if (fd_switch_mon_yer == "Year") {
        $(".fd_fs_y_m").text(1 + " Year");
        $(".fd_fe_y_m").text(50 + " Years");
    } else if (fd_switch_mon_yer == "Month") {
        $(".fd_fs_y_m").text(1 + " Month");
        $(".fd_fe_y_m").text(600 + " Months");
    }
});
fd_switch_mon_yer = $(".fdtoggle:checked").val();

var fddate = new Date();

// $("#m-button").click(function () {
//   $("#m-button").addClass("active");
//   $("#f-button").removeClass("active");
//   $("#q-button").removeClass("active");
//   $("#f-button").addClass("switch_3_togg");
//   $("#q-button").addClass("switch_3_togg");
//   $("#gender").val();
//   console.log($("#m-button").val());
// });
// $("#f-button").click(function () {
//   $("#f-button").addClass("active");
//   $("#m-button").removeClass("active");
//   $("#q-button").removeClass("active");
//   $("#m-button").addClass("switch_3_togg");
//   $("#q-button").addClass("switch_3_togg");
//   $("#gender").val();
//   console.log($("#f-button").val());
// });

// $("#q-button").click(function () {
//   $("#f-button").removeClass("active");
//   $("#m-button").removeClass("active");
//   $("#f-button").addClass("switch_3_togg");
//   $("#m-button").addClass("switch_3_togg");
//   $("#q-button").addClass("active");
//   $("#gender").val();
//   console.log($("#q-button").val());
// });

function calculatefd() {
    deposit_fd = $("#deposit_am").val();
    rate_fd = $("#rate_int").val();
    time_p_fd = $("#time_period").val();
    fd_switch_mon_yer = $(".fdtoggle:checked").val();

    if (deposit_fd != "") {
        $(".deposit_am_v").css("display", "none");
        if (deposit_fd > 0) {
            $(".valid_f_0d_fd").css("display", "none");
            if (deposit_fd < 100000000) {
                $(".valid_f_10c_d_fd").css("display", "none");

                if (rate_fd != "") {
                    $(".intrest_r_v").css("display", "none");
                    if (rate_fd > 0) {
                        $(".valid_f0per_fd").css("display", "none");
                        if (rate_fd <= 50) {
                            $(".valid_f51per_fd").css("display", "none");

                            if (time_p_fd != "") {
                                $(".time_p_v").css("display", "none");
                                if (time_p_fd > 0) {
                                    $(".valid_f0_time_fd").css(
                                        "display",
                                        "none"
                                    );

                                    if (fd_switch_mon_yer == "Year") {
                                        /* Number of compounding in a year is 4 i.e. 1 every quarter */

                                        if (time_p_fd <= 50) {
                                            $(".valid_f50_time_fd").css(
                                                "display",
                                                "none"
                                            );

                                            var n_fd = 4;

                                            /* Rate of Intrest */
                                            var r_fd = rate_fd / 100;

                                            var a_fd = 1 + r_fd / n_fd;

                                            var b_fd = n_fd * time_p_fd;

                                            var c_fd = Math.pow(a_fd, b_fd);

                                            var A_fd = deposit_fd * c_fd;
                                            // console.log(A_fd);
                                            $(".matuarity_val_r").text(
                                                "₹ " + A_fd.toFixed(2) + "/-"
                                            );

                                            // console.log(deposit_fd);
                                            $(".deposit_am_r").text(
                                                "₹ " + deposit_fd + "/-"
                                            );

                                            var returns_fd = A_fd - deposit_fd;
                                            // console.log(returns_fd);
                                            $(".total_int_r").text(
                                                "₹ " +
                                                    returns_fd.toFixed(2) +
                                                    "/-"
                                            );

                                            $(".deposit_date_s").text(
                                                fddate.getDate() +
                                                    "/" +
                                                    (fddate.getMonth() + 1) +
                                                    "/" +
                                                    fddate.getFullYear()
                                            );
                                            $(".maturity_date_e").text(
                                                fddate.getDate() +
                                                    "/" +
                                                    (fddate.getMonth() + 1) +
                                                    "/" +
                                                    (fddate.getFullYear() +
                                                        Number(time_p_fd))
                                            );
                                        } else {
                                            $(".valid_f50_time_fd").css(
                                                "display",
                                                "block"
                                            );
                                        }
                                    } else if (fd_switch_mon_yer == "Month") {
                                        if (time_p_fd <= 600) {
                                            $(".valid_f600_time_fd").css(
                                                "display",
                                                "none"
                                            );

                                            var n_fd = 4;

                                            /* Rate of Intrest */
                                            var r_fd = rate_fd / 100;

                                            var a_fd = 1 + r_fd / n_fd;

                                            var b_fd = n_fd * (time_p_fd / 12);

                                            var c_fd = Math.pow(a_fd, b_fd);

                                            var A_fd = deposit_fd * c_fd;
                                            // console.log(A_fd);
                                            $(".matuarity_val_r").text(
                                                "₹ " + A_fd.toFixed(2) + "/-"
                                            );

                                            // console.log(deposit_fd);
                                            $(".deposit_am_r").text(
                                                "₹ " + deposit_fd + "/-"
                                            );

                                            var returns_fd = A_fd - deposit_fd;
                                            // console.log(returns_fd);
                                            $(".total_int_r").text(
                                                "₹ " +
                                                    returns_fd.toFixed(2) +
                                                    "/-"
                                            );
                                            var matuarityfddate = new Date();
                                            var a = matuarityfddate.setMonth(
                                                fddate.getMonth() + time_p_fd
                                            );
                                            $(".deposit_date_s").text(
                                                fddate.getDate() +
                                                    "/" +
                                                    (fddate.getMonth() + 1) +
                                                    "/" +
                                                    fddate.getFullYear()
                                            );
                                            $(".maturity_date_e").text(
                                                matuarityfddate.getDate() +
                                                    "/" +
                                                    (matuarityfddate.getMonth() +
                                                        1) +
                                                    "/" +
                                                    matuarityfddate.getFullYear()
                                            );
                                        } else {
                                            $(".valid_f600_time_fd").css(
                                                "display",
                                                "block"
                                            );
                                        }
                                    }
                                } else {
                                    $(".valid_f0_time_fd").css(
                                        "display",
                                        "block"
                                    );
                                }
                            } else {
                                $(".time_p_v").css("display", "block");
                                $(".valid_f0_time_fd").css("display", "none");
                                $(".valid_f50_time_fd").css("display", "none");
                            }
                        } else {
                            $(".valid_f51per_fd").css("display", "block");
                        }
                    } else {
                        $(".valid_f0per_fd").css("display", "block");
                    }
                } else {
                    $(".intrest_r_v").css("display", "block");
                    $(".valid_f0per_fd").css("display", "none");
                    $(".valid_f51per_fd").css("display", "none");
                }
            } else {
                $(".valid_f_10c_d_fd").css("display", "block");
            }
        } else {
            $(".valid_f_0d_fd").css("display", "block");
          
        }
    } else {
        $(".deposit_am_v").css("display", "block");
        $(".valid_f_10c_d_fd").css("display", "none");
        $(".valid_f_0d_fd").css("display", "none");
    }
}

/* 
  *********************
    EMI CALCULATOR  
  *********************
*/
var P_emi = "";
var E_emi = "";
var R_emi = "";
var N_emi = "";
var emi_mon_y;
var emi_int;
var totalamount;
var Emi_w;
var for_min_emi_y;
var for_min_emi_m;
var f100_emi_y;
var f100_emi_m;

$(".emi_loan_a").change(function () {
    P_emi = Number($(".emi_loan_a").val());
    $("#emi_loan_a_range").val(P_emi);
});

$("#emi_loan_a_range").change(function () {
    P_emi = Number($("#emi_loan_a_range").val());
    $(".emi_loan_a").val(P_emi);
});

$(".emi_amount").change(function () {
    E_emi = Number($(".emi_amount").val());
    $("#emi_amount_range").val(E_emi);
});

$("#emi_amount_range").change(function () {
    E_emi = Number($("#emi_amount_range").val());
    $(".emi_amount").val(E_emi);
});

$(".emi_time_peiod").change(function () {
    N_emi = Number($(".emi_time_peiod").val());
    $("#emi_time_peiod_range").val(N_emi);
});

$("#emi_time_peiod_range").change(function () {
    N_emi = Number($("#emi_time_peiod_range").val());
    $(".emi_time_peiod").val(N_emi);
});

$(".fdtoggle").change(function () {
    emi_mon_y = $(".fdtoggle:checked").val();
    if (emi_mon_y === "Year") {
        $(".check_emi_my_s").text(1 + " Year");
        $(".check_emi_my_g").text(50 + " Year");
    } else if (emi_mon_y === "Month") {
        $(".check_emi_my_s").text(1 + " Month");
        $(".check_emi_my_g").text(600 + " Month");
    }
});

function calculateemi() {
    emi_mon_y = $(".fdtoggle:checked").val();
    P_emi = $(".emi_loan_a").val();
    E_emi = $(".emi_amount").val();
    N_emi = $(".emi_time_peiod").val();

   
    // var chart = new google.visualization.PieChart(document.getElementById("donutchart"));

    //  p*r * (1+r) ** n / (1+r)**(n-1)

    // var r_e = 100/12/100;

    if (P_emi != "") {
        $(".loan_am_v").css("display", "none");
       
        if (P_emi > 0) {
            $(".valid_f0_emi_l_am").css("display", "none");

            if (P_emi < 100000001) {
                $(".valid_f10c_emi_l_am").css("display", "none");

                if (E_emi != "") {
                    $(".emi_am_v").css("display", "none");
                    if (E_emi > 0) {
                        $(".valid_f0_emi_am").css("display", "none");
                        if (E_emi < 51) {
                            $(".valid_f10c_emi_am").css("display", "none");
                            if (N_emi != "") {
                                $(".time_p_emi_v").css("display", "none");

                                if (N_emi > 0) {
                                    $(".valid_0time_per_emi").css(
                                        "display",
                                        "none"
                                    );

                                    if (emi_mon_y == "Year") {
                                        // var chart = new google.visualization.PieChart(document.getElementById('donut_single'));

                                        if (N_emi < 51) {
                                            $(".valid_30timr_per_emi").css(
                                                "display",
                                                "none"
                                            );

                                            var inmonth = N_emi * 12;
                                            var rateofintrest =
                                                E_emi / 12 / 100;
                                            var r = 1 + rateofintrest;

                                            var intrest_power = Math.pow(
                                                r,
                                                inmonth
                                            );

                                            var a =
                                                P_emi *
                                                rateofintrest *
                                                intrest_power;
                                            /* console.log(a); */

                                            var b = intrest_power - 1;

                                            var monthly_emi = a / b;

                                            $(".monthly_emi_res").text(
                                                "₹ " +
                                                    monthly_emi.toFixed(2) +
                                                    "/-"
                                            );

                                            /* Total Amount */

                                            var total_amount =
                                                inmonth * monthly_emi;

                                            // /* console.log("t_amount",total_amount); */

                                            $(".total_am_emi_res").text(
                                                "₹ " +
                                                    total_amount.toFixed(2) +
                                                    "/-"
                                            );

                                            /* Total_Intrest */

                                            var total_intrest =
                                                total_amount - P_emi;

                                            $(".total_int_emi_res").text(
                                                "₹ " +
                                                    total_intrest.toFixed(2) +
                                                    "/-"
                                            );

                                            // google.charts.load("current", { packages: ["corechart"] });
                                            // google.charts.setOnLoadCallback(drawChart);
                                            // drawChart();

                                         
                                                google.charts.load("current", {
                                                    packages: ["corechart"],
                                                });
                                                google.charts.setOnLoadCallback(
                                                    drawChart
                                                );

                                                function drawChart() {
                                                    var data =
                                                        google.visualization.arrayToDataTable(
                                                            [
                                                                [
                                                                    "Effort",
                                                                    "Amount given",
                                                                ],
                                                                [
                                                                    "Principle Amount",
                                                                    Number(
                                                                        P_emi
                                                                    ),
                                                                ],
                                                                [
                                                                    "Interest Amount",
                                                                    Number(
                                                                        total_intrest
                                                                    ),
                                                                ],
                                                            ]
                                                        );
                                                    // console.log(
                                                    //   (P_emi),
                                                    //     (emi_int)
                                                    // );

                                                    // Emi_w = window.innerWidth;
                                                    // console.log(Emi_w, typeof(Emi_w));
                                                    var graph_w;
                                                    if (
                                                        window.innerWidth <= 420
                                                    ) {
                                                        graph_w = 250;

                                                        var options = {
                                                            pieHole: 0.8,
                                                            pieSliceText:
                                                                "none",
                                                            // pieSliceTextStyle: {
                                                            //   color: 'black',
                                                            // },
                                                            legend: "bottom",
                                                            width: graph_w,
                                                            height: 350,
                                                            titleTextStyle: {
                                                                color: "#707070",
                                                            },
                                                            chartArea: {
                                                                width: "100%",
                                                                height: "80%",
                                                            },
                                                            colors: [
                                                                "#feddc1",
                                                                "#fc8019",
                                                            ],
                                                            title: "Pie Analysis",
                                                        };
                                                    } else if (
                                                        window.innerWidth <= 310
                                                    ) {
                                                        graph_w = 200;

                                                        var options = {
                                                            pieHole: 0.8,
                                                            pieSliceText:
                                                                "none",
                                                            // pieSliceTextStyle: {
                                                            //   color: 'black',
                                                            // },
                                                            legend: "bottom",
                                                            width: graph_w,
                                                            height: 350,
                                                            titleTextStyle: {
                                                                color: "#707070",
                                                            },
                                                            chartArea: {
                                                                width: "100%",
                                                                height: "80%",
                                                            },
                                                            colors: [
                                                                "#feddc1",
                                                                "#fc8019",
                                                            ],
                                                            title: "Pie Analysis",
                                                        };
                                                    } else {
                                                        var options = {
                                                            pieHole: 0.8,
                                                            pieSliceText:
                                                                "none",
                                                            // pieSliceTextStyle: {
                                                            //   color: 'black',
                                                            // },
                                                            legend: "bottom",
                                                            width: 350,
                                                            height: 350,
                                                            titleTextStyle: {
                                                                color: "#707070",
                                                            },

                                                            chartArea: {
                                                                width: "100%",
                                                                height: "80%",
                                                            },
                                                            colors: [
                                                                "#feddc1",
                                                                "#fc8019",
                                                            ],
                                                            title: "Pie Analysis",
                                                        };
                                                    }

                                                    var chart =
                                                        new google.visualization.PieChart(
                                                            document.getElementById(
                                                                "donutchart"
                                                            )
                                                        );
                                                    chart.draw(data, options);
                                                }
                                            
                                        } else {
                                            $(".valid_30timr_per_emi").css(
                                                "display",
                                                "block"
                                            );
                                        }
                                    } else if (emi_mon_y == "Month") {
                                        // var chart = new google.visualization.PieChart(document.getElementById('donut_single'));

                                        if (N_emi < 601) {
                                            $(".valid_600m_timr_per_emi").css(
                                                "display",
                                                "none"
                                            );

                                            var inmonth = N_emi;
                                            var rateofintrest =
                                                E_emi / 12 / 100;
                                            var r = 1 + rateofintrest;

                                            var intrest_power = Math.pow(
                                                r,
                                                inmonth
                                            );

                                            var a =
                                                P_emi *
                                                rateofintrest *
                                                intrest_power;
                                            /* console.log(a); */

                                            var b = intrest_power - 1;

                                            var monthly_emi = a / b;

                                            $(".monthly_emi_res").text(
                                                "₹ " +
                                                    monthly_emi.toFixed(2) +
                                                    "/-"
                                            );

                                            /* Total Amount */

                                            var total_amount =
                                                inmonth * monthly_emi;

                                            // /* console.log("t_amount",total_amount); */

                                            $(".total_am_emi_res").text(
                                                "₹ " +
                                                    total_amount.toFixed(2) +
                                                    "/-"
                                            );

                                            /* Total_Intrest */

                                            var total_intrest =
                                                total_amount - P_emi;

                                            $(".total_int_emi_res").text(
                                                "₹ " +
                                                    total_intrest.toFixed(2) +
                                                    "/-"
                                            );

                                            
                                                google.charts.load("current", {
                                                    packages: ["corechart"],
                                                });
                                                google.charts.setOnLoadCallback(
                                                    drawChart
                                                );

                                                function drawChart() {
                                                    var data =
                                                        google.visualization.arrayToDataTable(
                                                            [
                                                                [
                                                                    "Effort",
                                                                    "Amount given",
                                                                ],
                                                                [
                                                                    "Principle Amount",
                                                                    Number(
                                                                        P_emi
                                                                    ),
                                                                ],
                                                                [
                                                                    "Interest Amount",
                                                                    Number(
                                                                        total_intrest
                                                                    ),
                                                                ],
                                                            ]
                                                        );

                                                    // Emi_w = window.innerWidth;
                                                    // console.log(Emi_w, typeof(Emi_w));
                                                    var graph_w;
                                                    if (
                                                        window.innerWidth <= 420
                                                    ) {
                                                        graph_w = 250;

                                                        var options = {
                                                            pieHole: 0.8,
                                                            pieSliceText:
                                                                "none",
                                                            // pieSliceTextStyle: {
                                                            //   color: 'black',
                                                            // },
                                                            legend: "bottom",
                                                            width: graph_w,
                                                            height: 350,
                                                            titleTextStyle: {
                                                                color: "#707070",
                                                            },
                                                            chartArea: {
                                                                width: "100%",
                                                                height: "80%",
                                                            },
                                                            colors: [
                                                                "#feddc1",
                                                                "#fc8019",
                                                            ],
                                                            title: "Pie Analysis",
                                                        };
                                                    } else if (
                                                        window.innerWidth <= 310
                                                    ) {
                                                        graph_w = 200;

                                                        var options = {
                                                            pieHole: 0.8,
                                                            pieSliceText:
                                                                "none",
                                                            // pieSliceTextStyle: {
                                                            //   color: 'black',
                                                            // },
                                                            legend: "bottom",
                                                            width: graph_w,
                                                            height: 350,
                                                            titleTextStyle: {
                                                                color: "#707070",
                                                            },
                                                            chartArea: {
                                                                width: "100%",
                                                                height: "80%",
                                                            },
                                                            colors: [
                                                                "#feddc1",
                                                                "#fc8019",
                                                            ],
                                                            title: "Pie Analysis",
                                                        };
                                                    } else {
                                                        var options = {
                                                            pieHole: 0.8,
                                                            pieSliceText:
                                                                "none",
                                                            // pieSliceTextStyle: {
                                                            //   color: 'black',
                                                            // },
                                                            legend: "bottom",
                                                            width: 350,
                                                            height: 350,
                                                            titleTextStyle: {
                                                                color: "#707070",
                                                            },
                                                            chartArea: {
                                                                width: "100%",
                                                                height: "80%",
                                                            },
                                                            colors: [
                                                                "#feddc1",
                                                                "#fc8019",
                                                            ],
                                                            title: "Pie Analysis",
                                                        };
                                                    }

                                                    var chart =
                                                        new google.visualization.PieChart(
                                                            document.getElementById(
                                                                "donutchart"
                                                            )
                                                        );
                                                    chart.draw(data, options);
                                                }
                                            
                                        } else {
                                            $(".valid_600m_timr_per_emi").css(
                                                "display",
                                                "block"
                                            );
                                        }
                                    }
                                } else {
                                    $(".valid_0time_per_emi").css(
                                        "display",
                                        "block"
                                    );
                                }

                                // google.charts.load("current", { packages: ["corechart"] });
                                // google.charts.setOnLoadCallback(drawChart);
                            } else {
                                $(".time_p_emi_v").css("display", "block");
                            }
                        } else {
                            $(".valid_f10c_emi_am").css("display", "block");
                            $(".valid_f0_emi_am").css("display", "none");
                        }
                    } else {
                        $(".valid_f0_emi_am").css("display", "block");
                        $(".valid_f10c_emi_am").css("display", "none");
                    }
                } else {
                    $(".emi_am_v").css("display", "block");
                    $(".valid_f0_emi_am").css("display", "none");
                    $(".valid_f10c_emi_am").css("display", "none");
                }
            } else {
                $(".valid_f10c_emi_l_am").css("display", "block");
            }
        } else {
            $(".valid_f0_emi_l_am").css("display", "block");
        }
    } else {
        $(".loan_am_v").css("display", "block");
    }
}

/* 
  *********************
     80U CALCULATOR  
  *********************
*/

var Year80u;
var Residential80u;
var Disabilityper80U;
var d80u = new Date();
var year80u = d80u.getFullYear();

$("#year_80u").text(year80u + " - " + (year80u + 1));
$("#year_80u").val(year80u);

var check_year_80u = $(".year_80u").change(function () {
    Year80u = $(".year_80u").val();
});

var check_resident_80u = $(".resident_80u").change(function () {
    Residential80u = $(".resident_80u").val();
});

var check_disability_per_80u = $(".disability_per_80us").change(function () {
    Disabilityper80U = $(".disability_per_80us").val();
});
Disabilityper80U = $(".disability_per_80us").val();

$("#calculate_80u").click(function (e) {
    e.preventDefault();

    if (check_year_80u.val() != "select") {
        $(".financial_ye_80u_v").css("display", "none");

        if (check_resident_80u.val() != "select") {
            $(".residential_status_80u_v").css("display", "none");

            if (Disabilityper80U != "select") {
                $(".per_disability_80u_v").css("display", "none");

                if (Disabilityper80U === "normal") {
                    $(".result_80u_amount").text("₹ " + 75000);
                } else if (Disabilityper80U === "severe") {
                    $(".result_80u_amount").text("₹ " + 125000);
                }
                // else {
                //   $(".result_80u_amount").text("₹ " + 0 + "/-");

                // }
            } else {
                $(".per_disability_80u_v").css("display", "block");
                $(".result_80u_amount").text("₹ " + 0);
            }
        } else {
            $(".residential_status_80u_v").css("display", "block");
            $(".result_80u_amount").text("₹ " + 0);
        }
    } else {
        $(".financial_ye_80u_v").css("display", "block");
        $(".result_80u_amount").text("₹ " + 0);
    }
});

/* 
  *********************
     HRA Calculator
  *********************
   */

var basic_salary = "";
var hra_received = "";
var rent_p = "";
var hra_radio_in;
var anual_basic_salary;
var anual_hra_received;
var anual_rent_p;
var hra_exempted;
var hra_taxable;
var hra_merto_c;
var hra_non_merto_c;

$(".hrsradio").change(function () {
    hra_radio_in = $(".hrsradio:checked").val();
  
});

hra_radio_in = $(".hrsradio:checked").val();

$("#hra_calaulator").click(function (e) {
    e.preventDefault();

    basic_salary = $("#basicsalary").val();
    hra_received = $("#hra_recive").val();
    rent_p = $("#actual_rent").val();

    anual_basic_salary = Number(basic_salary);
    anual_hra_received = Number(hra_received);
    anual_rent_p = Number(rent_p);

    //  console.log((anual_basic_salary), (anual_hra_received), (anual_rent_p));

    // console.log(anual_hra_received);

    // console.log(anual_rent_p - (anual_basic_salary * (10 / 100)));  //

    // console.log(anual_basic_salary * (50 / 100));

    hra_exempted = anual_rent_p - anual_basic_salary * (10 / 100);

    /* Metro City */

    hra_merto_c = anual_basic_salary * (50 / 100);

    /* Non-Metro City */

    hra_non_merto_c = anual_basic_salary * (40 / 100);

    if (basic_salary != "") {
        $(".basicsalary_DA_v").css("display", "none");

        if (basic_salary > 0) {
            $(".basicsalary_DA_v").css("display", "none");

            if (hra_received != "") {
                $(".hra_recived_v").css("display", "none");
                if (hra_radio_in != undefined) {
                    $(".choose_city_v").css("display", "none");
                    if (rent_p != "") {
                        $(".a_rentpay_v").css("display", "none");

                        if (hra_radio_in == "metro_city") {
                            if (
                                anual_hra_received < hra_exempted &&
                                anual_hra_received < hra_merto_c
                            ) {
                                hra_taxable =
                                    anual_hra_received - anual_hra_received;
                                $("#hra_exe").text(
                                    "₹ " + anual_hra_received + "/-"
                                );
                                $("#hra_taxable").text(
                                    "₹ " + hra_taxable + "/-"
                                );
                            } else if (
                                hra_exempted < anual_hra_received &&
                                hra_exempted < hra_merto_c
                            ) {
                                hra_taxable = anual_hra_received - hra_exempted;
                                // localStorage.setItem("hra_taxable", hra_taxable);
                                // window.location.href = "../HRA_result.html";
                                $("#hra_exe").text("₹ " + hra_exempted + "/-");
                                $("#hra_taxable").text(
                                    "₹ " + hra_taxable + "/-"
                                );
                            } else if (
                                hra_merto_c < anual_hra_received &&
                                hra_merto_c < hra_exempted
                            ) {
                                // localStorage.setItem("hra_exempted", hra_merto_c);
                                hra_taxable = anual_hra_received - hra_merto_c;
                                // localStorage.setItem("hra_taxable", hra_taxable);
                                // window.location.href = "../HRA_result.html";
                                $("#hra_exe").text("₹ " + hra_merto_c + "/-");
                                $("#hra_taxable").text(
                                    "₹ " + hra_taxable + "/-"
                                );
                            }

                            $("#hracalculator").css("display", "none");
                            $(".hra_result_div").css("display", "block");
                        } else if (hra_radio_in === "other_city") {
                            if (
                                anual_hra_received < hra_exempted &&
                                anual_hra_received < hra_non_merto_c
                            ) {
                                // localStorage.setItem("hra_exempted", anual_hra_received);
                                hra_taxable =
                                    anual_hra_received - anual_hra_received;
                                // localStorage.setItem("hra_taxable", hra_taxable);
                                // window.location.href = "../HRA_result.html";
                                $("#hra_exe").text(
                                    "₹ " + anual_hra_received + "/-"
                                );
                                $("#hra_taxable").text(
                                    "₹ " + hra_taxable + "/-"
                                );
                            } else if (
                                hra_exempted < anual_hra_received &&
                                hra_exempted < hra_non_merto_c
                            ) {
                                // localStorage.setItem("hra_exempted", hra_exempted);
                                hra_taxable = anual_hra_received - hra_exempted;
                                // localStorage.setItem("hra_taxable", hra_taxable);
                                // window.location.href = "../HRA_result.html";
                                $("#hra_exe").text("₹ " + hra_exempted + "/-");
                                $("#hra_taxable").text(
                                    "₹ " + hra_taxable + "/-"
                                );
                            } else if (
                                hra_non_merto_c < anual_hra_received &&
                                hra_non_merto_c < hra_exempted
                            ) {
                                // localStorage.setItem("hra_exempted", hra_non_merto_c);
                                hra_taxable =
                                    anual_hra_received - hra_non_merto_c;
                                // localStorage.setItem("hra_taxable", hra_taxable);
                                // window.location.href = "../HRA_result.html";
                                $("#hra_exe").text(
                                    "₹ " + hra_non_merto_c + "/-"
                                );
                                $("#hra_taxable").text(
                                    "₹ " + hra_taxable + "/-"
                                );
                            }

                            $("#hracalculator").css("display", "none");
                            $(".hra_result_div").css("display", "block");
                        }
                    } else {
                        $(".a_rentpay_v").css("display", "block");
                    }
                } else {
                    $(".choose_city_v").css("display", "block");
                }
            } else {
                $(".hra_recived_v").css("display", "block");
            }
        } else {
            $(".check_err_hra").text("greater than ₹ 0 ");
            $(".basicsalary_DA_v").css("display", "block");
        }
    } else {
        $(".check_err_hra").text("");
        $(".basicsalary_DA_v").css("display", "block");
    }
});

$("#hra_back").click(function (e) {
    // window.location.href =  "{{ asset('css/HRA_result.html')}}";
    $("#hracalculator").css("display", "block");
    $(".hra_result_div").css("display", "none");
});

/* 
  *********************
     Gratuity CALCULATOR  
  *********************
*/

var g_basic_pay = "";
var g_dearness_aallowance = "";
var g_years_of_ser = "";
var total_gratuity = "";

$(".g_basic_pay").change(function () {
    g_basic_pay = $(".g_basic_pay").val();
});

$(".g_dearness_a").change(function () {
    g_dearness_aallowance = $(".g_dearness_a").val();
});

$(".g_years").change(function () {
    g_years_of_ser = $(".g_years").val();
});

$("#g_calaulator").click(function (e) {
    e.preventDefault();

    if (g_basic_pay != "") {
        $(".g_bpay").css("display", "none");

        if (g_basic_pay > 0) {
            $(".g_bpay").css("display", "none");

            if (g_dearness_aallowance != "") {
                $(".g_dear_all").css("display", "none");

                if (g_years_of_ser != "") {
                    $(".g_y_service").css("display", "none");

                    if (g_years_of_ser > 0) {
                        $(".g_y_service").css("display", "none");

                        total_gratuity =
                            ((Number(g_basic_pay) +
                                Number(g_dearness_aallowance)) *
                                g_years_of_ser *
                                15) /
                            26;
                      
                        // localStorage.setItem("total_gratuity", total_gratuity);
                        // window.location.href = "./Gratuity_calculator_result.html";
                        $(".total_g_pay_r").text(
                            "₹ " + total_gratuity.toFixed(2) + "/-"
                        );
                        $(".gratuity_calculate_in").css("display", "none");
                        $(".gratuity_result_show").css("display", "block");
                    } else {
                        $(".gra_cal_y").text("greater than 0 ");
                        $(".g_y_service").css("display", "block");
                    }
                } else {
                    $(".gra_cal_y").text("");
                    $(".g_y_service").css("display", "block");
                }
            } else {
                $(".g_dear_all").css("display", "block");
            }
        } else {
            $(".g_bp").text("greater than ₹ 0 ");
            $(".g_bpay").css("display", "block");
        }
    } else {
        $(".g_bpay").css("display", "block");
    }
});

$(".b_a_gratuity").click(function (e) {
    e.preventDefault();
    $(".gratuity_calculate_in").css("display", "block");
    $(".gratuity_result_show").css("display", "none");
});

/* 
  *********************
     Simple Intrest 
  *********************
*/

var Si_principal_am = "";
var Si_intrest_r = "";
var si_durtion = "";
var total_in = "";
var Si_period_u = "";
var si_day = "";
var Si_total_val = "";
var chart = "";

/* Input range */
$("#si_principal_am").change(function () {
    Si_principal_am = $("#si_principal_am").val();
    //    console.log(Si_principal_am);
    $(".si_p_input").val(Si_principal_am);
});

$("#si_intrest_r").change(function () {
    Si_intrest_r = $("#si_intrest_r").val();
    // console.log(Si_intrest_r);
    $(".si_r_input").val(Si_intrest_r);
});

/* Input no */

$(".si_p_input").change(function () {
    Si_principal_am = $(".si_p_input").val();
    $("#si_principal_am").val(Si_principal_am);
});

$(".si_r_input").change(function () {
    Si_intrest_r = $(".si_r_input").val();
    $("#si_intrest_r").val(Si_intrest_r);
});

$("#si_duration").change(function () {
    si_durtion = $("#si_duration").val();
});

$(".si_period_u").change(function () {
    Si_period_u = $(".si_period_u  option:selected").text();
});

/* Reset Button Click */
$("#si_reset").click(function () {
    $(".si_p_input").val(0);
    $(".si_r_input").val(0);
    $("#si_duration").val(0);
    $(".si_period_u").val("Select");
    $("#si_principal_am").val(0);
    $("#si_intrest_r").val(0);
    $(".si_principal_amount").text("₹ " + 0 + "/-");
    $(".si_total_intrest").text("₹ " + 0 + "/-");
    $(".si_total_value").text("₹ " + 0 + "/-");
});

/*  Calculate Button Click */

$("#si_calculate").click(function (e) {
    e.preventDefault();

    if ($(".si_p_input").val() != "") {
        $(".principal_a_v").css("display", "none");

        if ($(".si_p_input").val() > 0) {
            $(".principal_a_v").css("display", "none");
            if ($(".si_p_input").val() < 100000001) {
                $(".principal_a_v").css("display", "none");

                if ($(".si_r_input").val() != "") {
                    $(".rate_i_v").css("display", "none");

                    if ($(".si_r_input").val() > 0) {
                        $(".rate_i_v").css("display", "none");
                        if ($(".si_r_input").val() < 101) {
                            $(".rate_i_v").css("display", "none");

                            if (
                                $(".si_period_u  option:selected").text() !=
                                "Select"
                            ) {
                                $(".period_u_v").css("display", "none");
                                if (
                                    $("#si_duration").val() != "" &&
                                    $("#si_duration").val() > 0
                                ) {
                                    $(".duration_v").css("display", "none");

                                    Si_A =
                                        Si_principal_am *
                                        (1 + (Si_intrest_r / 100) * si_durtion);

                                    total_in = Si_A - Si_principal_am;

                                    $(".si_principal_amount").text(
                                        "₹ " + Si_principal_am + "/-"
                                    );

                                    // $(".si_total_intrest").text(total_in.toFixed(2))

                                    // $(".si_total_value").text(Si_A.toFixed(2))

                                    if (Si_period_u === "Days") {
                                        si_day = total_in / 365;
                                        $(".si_total_intrest").text(
                                            "₹ " + si_day.toFixed(2) + "/-"
                                        );

                                        Si_total_val =
                                            Number(Si_principal_am) +
                                            Number(si_day.toFixed(2));
                                        $(".si_total_value").text(
                                            "₹ " +
                                                Si_total_val.toFixed(2) +
                                                "/-"
                                        );
                                    } else if (Si_period_u === "Weeks") {
                                        si_day = total_in / 52;
                                        $(".si_total_intrest").text(
                                            "₹ " + si_day.toFixed(2) + "/-"
                                        );

                                        Si_total_val =
                                            Number(Si_principal_am) +
                                            Number(si_day.toFixed(2));
                                        $(".si_total_value").text(
                                            "₹ " +
                                                Si_total_val.toFixed(2) +
                                                "/-"
                                        );
                                    } else if (Si_period_u === "Months") {
                                        si_day = total_in / 12;
                                        $(".si_total_intrest").text(
                                            "₹ " + si_day.toFixed(2) + "/-"
                                        );

                                        Si_total_val =
                                            Number(Si_principal_am) +
                                            Number(si_day.toFixed(2));
                                        $(".si_total_value").text(
                                            "₹ " +
                                                Si_total_val.toFixed(2) +
                                                "/-"
                                        );
                                    } else if (Si_period_u === "Quarters") {
                                        si_day = total_in / 4;
                                        $(".si_total_intrest").text(
                                            "₹ " + si_day.toFixed(2) + "/-"
                                        );

                                        Si_total_val =
                                            Number(Si_principal_am) +
                                            Number(si_day.toFixed(2));
                                        $(".si_total_value").text(
                                            "₹ " +
                                                Si_total_val.toFixed(2) +
                                                "/-"
                                        );
                                    } else if (Si_period_u === "Years") {
                                        $(".si_total_intrest").text(
                                            "₹ " + total_in.toFixed(2) + "/-"
                                        );
                                        Si_total_val =
                                            Number(Si_principal_am) +
                                            Number(total_in.toFixed(2));

                                        $(".si_total_value").text(
                                            "₹ " + Si_total_val + "/-"
                                        );
                                    }

                                    google.charts.load("current", {
                                        packages: ["corechart"],
                                    });
                                    google.charts.setOnLoadCallback(drawChart);
                                    function drawChart() {
                                        var data =
                                            google.visualization.arrayToDataTable(
                                                [
                                                    ["Task", "Hours per Day"],
                                                    [
                                                        "Total Interest",
                                                        Number(si_day),
                                                    ],
                                                    [
                                                        "Principle amount",
                                                        Number(Si_principal_am),
                                                    ],
                                                ]
                                            );

                                        var options = {
                                            title: "",
                                            pieHole: 0.72,
                                            pieSliceText: "none",
                                            colors: [
                                                "#F6941D",
                                                "#e6693e",
                                                "#ec8f6e",
                                                "#f3b49f",
                                                "#f6c7b6",
                                            ],
                                            chartArea: {
                                                width: "100%",
                                                height: "80%",
                                            },
                                            // width: 400,
                                            // height: 500,
                                            is3D: false,
                                            legend: "bottom",
                                        };

                                        chart =
                                            new google.visualization.PieChart(
                                                document.getElementById(
                                                    "donutchart"
                                                )
                                            );
                                        chart.draw(data, options);
                                    }
                                } else {
                                    $(".duration_v").css("display", "block");
                                }
                            } else {
                                $(".period_u_v").css("display", "block");
                            }
                        } else {
                            $(".si_check_f_rate").text("less than 101% ");
                            $(".rate_i_v").css("display", "block");
                        }
                    } else {
                        $(".si_check_f_rate").text("greater than 0% ");
                        $(".rate_i_v").css("display", "block");
                    }
                } else {
                    $(".si_check_f_rate").text("");
                    $(".rate_i_v").css("display", "block");
                }
            } else {
                $(".si_check_f_0").text("less than ₹ 10 c ");
                $(".principal_a_v").css("display", "block");
            }
        } else {
            $(".si_check_f_0").text("greater than ₹ 0 ");
            $(".principal_a_v").css("display", "block");
        }
    } else {
        $(".si_check_f_0").text("");
        $(".principal_a_v").css("display", "block");
    }
});

/*  CHART  */

// google.charts.load("current", {
//     packages: ["corechart"]
//   });
//   google.charts.setOnLoadCallback(drawChart);

/* 
  *****************************
     TDS Calculatoe
  *****************************
*/

var tds_section_list_rate = [
    {
        section:
            "Section 192A - Payment of accumulated PF balance to an employee",
        tds_rate: "10",
        threshold_limit: "50000",
        rule_of_tds:
            "If gross withdrawal before 5 year continuous services during the F.Y. exceeds Rs. 50,000 then TDS will be applicable @ 10 %",
        withoutPanRate: "30",
    },
    {
        section: "Section 193 - Interest on Securities",
        tds_rate: "10",
        threshold_limit: "10000",
        rule_of_tds:
            "If gross payment to the party during the F.Y. exceeds Rs. 10,000 then TDS will be applicable @ 10 %. In case where debentures are issued by the listed companies, no TDS shall be deducted upto Rs. 5000/-",
        withoutPanRate: "20",
    },
    {
        section:
            "Section 194 - Dividend other than the Dividend as referred to in Section 115-O",
        tds_rate: "10",
        threshold_limit: "5000",
        rule_of_tds:
            "If gross payment to the party during the F.Y. exceeds Rs. 5,000/- then TDS will be applicable @ 10 %.",
        withoutPanRate: "20",
    },
    {
        section: "Section 194B - Winnings from Lotteries/ Puzzles/ Game etc.",
        tds_rate: "30",
        threshold_limit: "10000",
        rule_of_tds:
            "If gross payment to the party during the F.Y. exceeds Rs. 10,000 then TDS will be applicable @ 30 %.",
        withoutPanRate: "30",
    },
    {
        section: "Section 194BB - Income by way of Winnings from Horse Races",
        tds_rate: "30",
        threshold_limit: "10000",
        rule_of_tds:
            "If gross payment to the party during the F.Y. exceeds Rs. 10,000 then TDS will be applicable @ 30 %.",
        withoutPanRate: "30",
    },
    {
        section: "Section 194DA - Maturity of Life Insurance Policy",
        tds_rate: "5",
        threshold_limit: "100000",
        rule_of_tds:
            "If gross payment to the party during the F.Y. is Rs. 1,00,000 or more then TDS will be applicable @ 5 % & it is not applicable if amount is exempt u/s 10(10D).",
        withoutPanRate: "20",
    },
    {
        section: "Section 194H - Commission or Brokerage",
        tds_rate: "5",
        threshold_limit: "15000",
        rule_of_tds:
            "If gross payment to the party during the F.Y. exceeds Rs. 15,000 then TDS will be applicable @ 5%.",
        withoutPanRate: "20",
    },
    {
        section: "Section 194I(a) - Rent on Plant & Machinery",
        tds_rate: "2",
        threshold_limit: "240000",
        rule_of_tds:
            "If gross payment to the party during the F.Y. exceeds Rs. 2,40,000 then TDS will be applicable @ 2% in case of Plant& machinery and 10 % in case of land & building or furniture & fitting.",
        withoutPanRate: "20",
    },
    {
        section:
            "Section 194I(b) - Rent on Land & building or Furniture & Fitting",
        tds_rate: "10",
        threshold_limit: "240000",
        rule_of_tds:
            "If gross payment to the party during the F.Y. exceeds Rs. 2,40,000 then TDS will be applicable @ 2% in case of Plant& machinery and 10 % in case of land & building or furniture & fitting.",
        withoutPanRate: "20",
    },
    {
        section:
            "Section 194IA - Payment on transfer of certain Immovable Property other than agricultural land",
        tds_rate: "1",
        threshold_limit: "5000000",
        rule_of_tds:
            "If gross payment to the party during the F.Y. is Rs. 50,00,000 or more then TDS will be applicable @ 1 %.",
        withoutPanRate: "0",
    },

    {
        section: "Section 194IB - Rent Payment to Landlord by Individuals",
        tds_rate: "5",
        threshold_limit: "50000",
        rule_of_tds:
            "If monthly rent payment to the landlord exceeds Rs. 50,000 then TDS will be applicable @ 5 %. ",
        withoutPanRate: "5",
    },
    {
        section: "Section 194K - Income in respect of units (UTI/MF)",
        tds_rate: "10",
        threshold_limit: "5000",
        rule_of_tds:
            "If dividend amount during the F.Y. exceeds Rs. 5,000 then TDS will be applicable @ 10%. No TDS to be deducted on Income from Capital Gains on sale of MFs",
        withoutPanRate: "20",
    },
    {
        section:
            "Section 194O - TDS on Payment by E-commerce Operator to E-commerce participant",
        tds_rate: "1",
        threshold_limit: "5000000",
        rule_of_tds:
            " If sale of goods or provision of services during the F.Y. exceeds Rs. 5,00,000 then TDS will be applicable @ 1 %.",
        withoutPanRate: "5",
    },
];

var select_nature_pay;
var tds_pan_yes;
var tds_payment;
var tds_pan = "";
var tds_nature_payment;
var tds_rate;
var withoutPanRate;
var threshold_limit;
var tds_recip;
var section;
var rule_of_tds;
var as_tds;

$(".tds_nature_of_payment").prop("disabled", true);

$(".tdspan").change(function () {
    tds_pan = $(".tdspan").val();
    if ($(".tdspan").val() == "Select") {
        $(".tds_nature_of_payment").prop("disabled", true);
    } else {
        $(".tds_nature_of_payment").prop("disabled", false);
    }
    update1();
});

function update1() {
    var tds_nature_of_pay = "";

    tds_section_list_rate.map(function (val, index) {
        // console.log(val);
        tds_nature_of_pay += `<option class="nature_of _pay" value=${index} > ${val.section} </option>`;
    });
    $(".tds_nature_of_payment").html(tds_nature_of_pay);
}

$(".tds_recipient").change(function () {
    tds_recip = $(".tds_recipient:checked").val();
    update1();
});

$(".tds_nature_of_payment").change(function () {
    let tds_payment1 = $(".tds_nature_of_payment").val();
    // console.log($(".tds_nature_of_payment option:selected").val());
    var mx = $(".tds_nature_of_payment option:selected").val();
    
    as_tds = tds_section_list_rate.filter(checkval);
    function checkval(item2, index) {
        return index == mx;
    }
    rule_of_tds = as_tds[0].rule_of_tds;

    if ($(".tdspan").val() == "Yes") {
        tds_rate = as_tds[0].tds_rate;
        threshold_limit = as_tds[0].threshold_limit;
        section = as_tds[0].section;
        rule_of_tds = as_tds[0].rule_of_tds;
        $("#tds_para").text(rule_of_tds);
        // localStorage.setItem("rule_of_tds", rule_of_tds);
    } else if ($(".tdspan").val() == "No") {
        withoutPanRate = as_tds[0].withoutPanRate;
        threshold_limit = as_tds[0].threshold_limit;
        section = as_tds[0].section;
        rule_of_tds = as_tds[0].rule_of_tds;

        $("#tds_para").text(rule_of_tds);
        // localStorage.setItem("rule_of_tds", rule_of_tds);
    } else {
        $(".tds_nature_of_payment").prop("disabled", true);
    }
});

$(".tds_amount_payment").change(function () {
    tds_payment = Number($(".tds_amount_payment").val());
    update1();
});

// $(".tds_nature_of_payment").change(function() {
//   tds_nature_payment = $(".tds_nature_of_payment").val()
//   console.log(tds_nature_payment);
//   update1()
// })

$("#calculate_tds").click(function (e) {
    e.preventDefault();

    if ($(".tdspan").val() != "Select") {
        $(".tds_pan_v").css("display", "none");
        if (tds_payment != undefined) {
            $(".tds_amount_pay_v").css("display", "none");

            if (tds_payment > 0) {
                $(".valid_f0_am_tds").css("display", "none");
                if (tds_payment < 10000000) {
                    $(".valid_f1c_am_tds").css("display", "none");

                    if (tds_recip != undefined) {
                        $(".tds_recipient_v").css("display", "none");
                        if (tds_recip == "indivisual") {
                            if (tds_pan == "Yes") {
                                if (tds_payment >= threshold_limit) {
                                    var tds_result =
                                        tds_rate * (tds_payment / 100);
                                    $("#tds_cal_result").text(
                                        "₹ " + tds_result.toFixed(2) + "/-"
                                    );
                                } else {
                                    $("#tds_cal_result").text("₹ " + 0 + "/-");
                                }
                            } else if (tds_pan == "No") {
                                if (tds_payment >= threshold_limit) {
                                    var tds_result =
                                        withoutPanRate * (tds_payment / 100);
                                    $("#tds_cal_result").text(
                                        "₹ " + tds_result.toFixed(2) + "/-"
                                    );
                                } else {
                                    $("#tds_cal_result").text("₹ " + 0 + "/-");
                                }
                            }
                        } else if (tds_recip == "Other") {
                            if (
                                section ==
                                "Section 192A - Payment of accumulated PF balance to an employee"
                            ) {
                                $("#tds_cal_result").text("₹ " + 0 + "/-");
                            } else {
                                if (tds_pan == "Yes") {
                                    if (tds_payment >= threshold_limit) {
                                        var tds_result =
                                            tds_rate * (tds_payment / 100);
                                        $("#tds_cal_result").text(
                                            "₹ " + tds_result.toFixed(2) + "/-"
                                        );
                                    } else {
                                        $("#tds_cal_result").text(
                                            "₹ " + 0 + "/-"
                                        );
                                    }
                                } else if (tds_pan == "No") {
                                    if (tds_payment >= threshold_limit) {
                                        var tds_result =
                                            withoutPanRate *
                                            (tds_payment / 100);
                                        $("#tds_cal_result").text(
                                            "₹ " + tds_result.toFixed(2) + "/-"
                                        );
                                    } else {
                                        $("#tds_cal_result").text(
                                            "₹ " + 0 + "/-"
                                        );
                                    }
                                }
                            }
                        }
                        $(".tds_cal_result").css("display", "block");
                        $(".tds_calcul").css("display", "none");
                    } else {
                        $(".tds_recipient_v").css("display", "block");
                    }
                } else {
                    $(".valid_f1c_am_tds").css("display", "block");
                }
            } else {
                $(".valid_f0_am_tds").css("display", "block");
            }
        } else {
            $(".tds_amount_pay_v").css("display", "block");
            $(".valid_f0_am_tds").css("display", "none");
            $(".valid_f1c_am_tds").css("display", "none");
        }
    } else {
        $(".tds_pan_v").css("display", "block");
    }
});

$("#hra_back").click(function () {
    $(".tds_cal_result").css("display", "none");
    $(".tds_calcul").css("display", "block");
});

/* 
  *********************
    PPF CALCULATOR  
  *********************
*/

var yearly_inveast_ppf;
var rate_intrest_ppf = "";
var time_period_ppf = "";
var month_year = "";

$(".year_inv_inp_ppf").change(function () {
    yearly_inveast_ppf = $(".year_inv_inp_ppf").val();
    $(".year_inv_range_ppf").val(yearly_inveast_ppf);
});

$(".year_inv_range_ppf").change(function () {
    yearly_inveast_ppf = $(".year_inv_range_ppf").val();
    $(".year_inv_inp_ppf").val(yearly_inveast_ppf);
});

$(".rate_int_inp_ppf").change(function () {
    rate_intrest_ppf = $(".rate_int_inp_ppf").val();
    $(".rate_int_range_ppf").val(rate_intrest_ppf);
});

$(".rate_int_range_ppf").change(function () {
    rate_intrest_ppf = $(".rate_int_range_ppf").val();
    $(".rate_int_inp_ppf").val(rate_intrest_ppf);
});

$(".time_p_inp_ppf").change(function () {
    time_period_ppf = $(".time_p_inp_ppf").val();
    $(".time_p_range_ppf").val(time_period_ppf);
});

$(".time_p_range_ppf").change(function () {
    time_period_ppf = $(".time_p_range_ppf").val();
    $(".time_p_inp_ppf").val(time_period_ppf);
});

$(".ppftogg").change(function () {
    month_year = $(".ppftogg:checked").val();
});
month_year = $(".ppftogg:checked").val();

function calculateppf() {
    yearly_inveast_ppf = $(".year_inv_inp_ppf").val();
    rate_intrest_ppf = $(".rate_int_inp_ppf").val();
    time_period_ppf = $(".time_p_inp_ppf").val();

    if (yearly_inveast_ppf != "") {
        $(".yearly_invest_ppf_valid").css("display", "none");
        if (yearly_inveast_ppf > 0) {
            $(".yearly_invest_ppf_valid_f0").css("display", "none");
            if (yearly_inveast_ppf < 100000001) {
                $(".yearly_invest_ppf_valid_f10c").css("display", "none");

                if (rate_intrest_ppf != "") {
                    $(".rate_intrest_ppf_valid").css("display", "none");

                    if (rate_intrest_ppf > 0) {
                        $(".rate_intrest_ppf_valid_f0per").css(
                            "display",
                            "none"
                        );

                        if (rate_intrest_ppf <= 50) {
                            $(".rate_intrest_ppf_valid_f50per").css(
                                "display",
                                "none"
                            );

                            if (time_period_ppf != "") {
                                $(".time_period_ppf_valid").css(
                                    "display",
                                    "none"
                                );

                                // if(month_year == "Year"){

                                if (time_period_ppf > 14) {
                                    $(".time_period_ppf_valid_f0y").css(
                                        "display",
                                        "none"
                                    );

                                    if (time_period_ppf < 31) {
                                        $(".time_period_ppf_valid_f30y").css(
                                            "display",
                                            "none"
                                        );

                                        var rate;
                                        var a_ppf;
                                        var b_ppf;
                                        var c_ppf;
                                        var d_ppf;
                                        var maturity_value_ppf;
                                        var invest_amount_ppf;
                                        var total_invest_ppf;
                                        var i;

                                        rate = rate_intrest_ppf / 100;
                                        i = Math.pow(
                                            1 + rate,
                                            time_period_ppf * 12
                                        );

                                        a_ppf = 1 + rate;
                                        b_ppf = Math.pow(
                                            a_ppf,
                                            time_period_ppf
                                        );
                                        c_ppf = b_ppf - 1;
                                        d_ppf = c_ppf / rate;

                                        maturity_value_ppf =
                                            yearly_inveast_ppf *
                                            d_ppf *
                                            (1 + rate);

                                        /* Maturity Value */
                                        $(".ppf_maturity_value").text(
                                            maturity_value_ppf.toFixed(2)
                                        );

                                        /* Invested amount */
                                        invest_amount_ppf =
                                            yearly_inveast_ppf *
                                            time_period_ppf;
                                        $(".ppf_iinvest_am_value").text(
                                            invest_amount_ppf.toFixed(2)
                                        );

                                        /* Total Intrest */

                                        total_invest_ppf =
                                            maturity_value_ppf -
                                            invest_amount_ppf;
                                        $(".ppf_total_intrest_value").text(
                                            total_invest_ppf.toFixed(2)
                                        );

                                        // console.log("ans", (yearly_inveast_ppf * [i - 1]) / rate);

                                        google.charts.load("current", {
                                            packages: ["corechart"],
                                        });
                                        google.charts.setOnLoadCallback(
                                            drawChart
                                        );

                                        function drawChart() {
                                            var data =
                                                google.visualization.arrayToDataTable(
                                                    [
                                                        [
                                                            "Effort",
                                                            "Amount given",
                                                        ],
                                                        [
                                                            "Total Interest",
                                                            Number(
                                                                total_invest_ppf
                                                            ),
                                                        ],
                                                        [
                                                            "Invested Amount",
                                                            Number(
                                                                invest_amount_ppf
                                                            ),
                                                        ],
                                                    ]
                                                );

                                            // Emi_w = window.innerWidth;
                                            // console.log(Emi_w, typeof(Emi_w));
                                            var graph_w;
                                            if (window.innerWidth <= 420) {
                                                graph_w = 250;

                                                var options = {
                                                    pieHole: 0.8,
                                                    // pieSliceTextStyle: {
                                                    //   color: 'black',
                                                    // },
                                                    legend: "bottom",
                                                    pieSliceText: "none",
                                                    width: graph_w,
                                                    height: 350,
                                                    titleTextStyle: {
                                                        color: "#707070",
                                                    },
                                                    chartArea: {
                                                        width: "100%",
                                                        height: "80%",
                                                    },
                                                    colors: [
                                                        "#feddc1",
                                                        "#fc8019",
                                                    ],
                                                    title: "Pie Analysis",
                                                };
                                            } else if (
                                                window.innerWidth <= 310
                                            ) {
                                                graph_w = 200;

                                                var options = {
                                                    pieHole: 0.8,
                                                    pieSliceText: "none",
                                                    // pieSliceTextStyle: {
                                                    //   color: 'black',
                                                    // },
                                                    legend: "bottom",
                                                    width: graph_w,
                                                    height: 350,
                                                    titleTextStyle: {
                                                        color: "#707070",
                                                    },
                                                    chartArea: {
                                                        width: "100%",
                                                        height: "80%",
                                                    },
                                                    colors: [
                                                        "#feddc1",
                                                        "#fc8019",
                                                    ],
                                                    title: "Pie Analysis",
                                                };
                                            } else {
                                                var options = {
                                                    pieHole: 0.8,
                                                    pieSliceText: "none",
                                                    // pieSliceTextStyle: {
                                                    //   color: 'black',
                                                    // },
                                                    legend: "bottom",
                                                    width: 350,
                                                    height: 350,
                                                    titleTextStyle: {
                                                        color: "#707070",
                                                    },

                                                    chartArea: {
                                                        width: "100%",
                                                        height: "80%",
                                                    },
                                                    colors: [
                                                        "#feddc1",
                                                        "#fc8019",
                                                    ],
                                                    title: "Pie Analysis",
                                                };
                                            }

                                            var chart =
                                                new google.visualization.PieChart(
                                                    document.getElementById(
                                                        "donutchart"
                                                    )
                                                );
                                            chart.draw(data, options);
                                        }
                                    } else {
                                        $(".ppf_c_f_ym_l").text(
                                            "less than 31 year "
                                        );
                                        $(".time_period_ppf_valid_f30y").css(
                                            "display",
                                            "block"
                                        );
                                    }
                                } else {
                                    $(".ppf_c_f_ym_g").text(
                                        "greater than 14 year "
                                    );
                                    $(".time_period_ppf_valid_f0y").css(
                                        "display",
                                        "block"
                                    );
                                }

                                // }
                                // else if(month_year == "Month") {

                                //     if(time_period_ppf > 179){
                                //         $(".time_period_ppf_valid_f0y").css(
                                //             "display",
                                //             "none"
                                //         );
                                //         if(time_period_ppf < 361){
                                //             $(".time_period_ppf_valid_f30y").css(
                                //                 "display",
                                //                 "none"
                                //             );

                                //             var rate;
                                //             var a_ppf;
                                //             var b_ppf;
                                //             var c_ppf;
                                //             var d_ppf;
                                //             var maturity_value_ppf;
                                //             var invest_amount_ppf;
                                //             var total_invest_ppf;
                                //             var i;

                                //             rate = rate_intrest_ppf / 100;
                                //             i = Math.pow(
                                //                 1 + rate,
                                //                 time_period_ppf
                                //             );

                                //             a_ppf = 1 + rate;
                                //             b_ppf = Math.pow(
                                //                 a_ppf,
                                //                 time_period_ppf
                                //             );
                                //             c_ppf = b_ppf - 1;
                                //             d_ppf = c_ppf / rate;

                                //             maturity_value_ppf =
                                //                 yearly_inveast_ppf *
                                //                 d_ppf *
                                //                 (1 + rate);

                                //             /* Maturity Value */
                                //             $(".ppf_maturity_value").text(
                                //                 maturity_value_ppf.toFixed(2)
                                //             );
                                //             console.log(
                                //                 " Maturity Value ",
                                //                 maturity_value_ppf
                                //             );

                                //             /* Invested amount */
                                //             invest_amount_ppf =
                                //                 yearly_inveast_ppf *
                                //                 time_period_ppf;
                                //             $(".ppf_iinvest_am_value").text(
                                //                 invest_amount_ppf.toFixed(2)
                                //             );

                                //             console.log(
                                //                 "y_invest",
                                //                 yearly_inveast_ppf
                                //             );
                                //             /* Total Intrest */

                                //             total_invest_ppf =
                                //                 maturity_value_ppf -
                                //                 invest_amount_ppf;
                                //             $(".ppf_total_intrest_value").text(
                                //                 total_invest_ppf.toFixed(2)
                                //             );

                                //             // console.log("ans", (yearly_inveast_ppf * [i - 1]) / rate);

                                //             google.charts.load("current", {
                                //                 packages: ["corechart"],
                                //             });
                                //             google.charts.setOnLoadCallback(
                                //                 drawChart
                                //             );

                                //             function drawChart() {
                                //                 var data =
                                //                     google.visualization.arrayToDataTable(
                                //                         [
                                //                             [
                                //                                 "Effort",
                                //                                 "Amount given",
                                //                             ],
                                //                             [
                                //                                 "Total Interest",
                                //                                 Number(
                                //                                     total_invest_ppf
                                //                                 ),
                                //                             ],
                                //                             [
                                //                                 "Invested Amount",
                                //                                 Number(
                                //                                     invest_amount_ppf
                                //                                 ),
                                //                             ],
                                //                         ]
                                //                     );

                                //                 // Emi_w = window.innerWidth;
                                //                 // console.log(Emi_w, typeof(Emi_w));
                                //                 var graph_w;
                                //                 if (window.innerWidth <= 420) {
                                //                     graph_w = 250;

                                //                     var options = {
                                //                         pieHole: 0.8,
                                //                         // pieSliceTextStyle: {
                                //                         //   color: 'black',
                                //                         // },
                                //                         legend: "bottom",
                                //                         pieSliceText: "none",
                                //                         width: graph_w,
                                //                         height: 350,
                                //                         titleTextStyle: {
                                //                             color: "#707070",
                                //                         },
                                //                         chartArea: {
                                //                             width: "100%",
                                //                             height: "80%",
                                //                         },
                                //                         colors: [
                                //                             "#feddc1",
                                //                             "#fc8019",
                                //                         ],
                                //                         title: "Pie Analysis",
                                //                     };
                                //                 } else if (
                                //                     window.innerWidth <= 310
                                //                 ) {
                                //                     graph_w = 200;

                                //                     var options = {
                                //                         pieHole: 0.8,
                                //                         pieSliceText: "none",
                                //                         // pieSliceTextStyle: {
                                //                         //   color: 'black',
                                //                         // },
                                //                         legend: "bottom",
                                //                         width: graph_w,
                                //                         height: 350,
                                //                         titleTextStyle: {
                                //                             color: "#707070",
                                //                         },
                                //                         chartArea: {
                                //                             width: "100%",
                                //                             height: "80%",
                                //                         },
                                //                         colors: [
                                //                             "#feddc1",
                                //                             "#fc8019",
                                //                         ],
                                //                         title: "Pie Analysis",
                                //                     };
                                //                 } else {
                                //                     var options = {
                                //                         pieHole: 0.8,
                                //                         pieSliceText: "none",
                                //                         // pieSliceTextStyle: {
                                //                         //   color: 'black',
                                //                         // },
                                //                         legend: "bottom",
                                //                         width: 350,
                                //                         height: 350,
                                //                         titleTextStyle: {
                                //                             color: "#707070",
                                //                         },

                                //                         chartArea: {
                                //                             width: "100%",
                                //                             height: "80%",
                                //                         },
                                //                         colors: [
                                //                             "#feddc1",
                                //                             "#fc8019",
                                //                         ],
                                //                         title: "Pie Analysis",
                                //                     };
                                //                 }

                                //                 var chart =
                                //                     new google.visualization.PieChart(
                                //                         document.getElementById(
                                //                             "donutchart"
                                //                         )
                                //                     );
                                //                 chart.draw(data, options);
                                //             }

                                //         }else{
                                //             $(".ppf_c_f_ym_l").text("less than 361 month ")
                                //             $(
                                //                 ".time_period_ppf_valid_f30y"
                                //             ).css("display", "block");
                                //         }

                                //     }else{
                                //         $(".ppf_c_f_ym_g").text("greater than 179 month ")
                                //         $(".time_period_ppf_valid_f0y").css(
                                //             "display",
                                //             "block"
                                //         );
                                //     }

                                // }
                            } else {
                                $(".time_period_ppf_valid").css(
                                    "display",
                                    "block"
                                );
                            }
                        } else {
                            $(".rate_intrest_ppf_valid_f50per").css(
                                "display",
                                "block"
                            );
                        }
                    } else {
                        $(".rate_intrest_ppf_valid_f0per").css(
                            "display",
                            "block"
                        );
                    }
                } else {
                    $(".rate_intrest_ppf_valid").css("display", "block");
                }
            } else {
                $(".yearly_invest_ppf_valid_f10c").css("display", "block");
            }
        } else {
            $(".yearly_invest_ppf_valid_f0").css("display", "block");
        }
    } else {
        $(".yearly_invest_ppf_valid").css("display", "block");
    }
}

/* 
  *********************************
    Capital Gain CALCULATOR  
  *********************************
*/

var type_of_asset_sold_val;
var selling_price_val = "";
var asset_bought_date = "";
var net_buying_price = "";
var asset_sold_date = "";
// var net_buying_pric_val;
var bought_year;
var bought_month;
var bought_day;
var sold_year;
var sold_month;
var sold_day;
var cg_profit;

var capital_gain_list = [
    {
        asset: "Stocks",
        Long_Term: 1,
        Long_Term_Tax: 10,
        Short_term_Tax: 15,
    },
    {
        asset: "Equity Oriented",
        Long_Term: 1,
        Long_Term_Tax: 10,
        Short_term_Tax: 15,
    },
    {
        asset: "Rest of the Mutual Funds",
        Long_Term: 3,
        Long_Term_Tax: 10,
        Short_term_Tax: "Profit Taxed at your Applicable Income Tax Rate",
    },
    {
        asset: "Government",
        Long_Term: 3,
        Long_Term_Tax: 10,
        Short_term_Tax: "Profit Taxed at your Applicable Income Tax Rate",
    },
    {
        asset: "Gold",
        Long_Term: 3,
        Long_Term_Tax: 10,
        Short_term_Tax: "Profit Taxed at your Applicable Income Tax Rate",
    },
    {
        asset: "Gold ETF",
        Long_Term: 3,
        Long_Term_Tax: 10,
        Short_term_Tax: "Profit Taxed at your Applicable Income Tax Rate",
    },
    {
        asset: "Property",
        Long_Term: 3,
        Long_Term_Tax: 10,
        Short_term_Tax: "Profit Taxed at your Applicable Income Tax Rate",
    },
    {
        asset: "Privately held Stocks",
        Long_Term: 3,
        Long_Term_Tax: 10,
        Short_term_Tax: "Profit Taxed at your Applicable Income Tax Rate",
    },
];

function cgcalculate() {
    type_of_asset_sold_val = $(".type_aset_sold").val();
    selling_price_val = $(".selling_price_val").val();
    asset_bought_date = $(".asset_bought_date").val();
    net_buying_price = $(".net_buying_price").val();
    asset_sold_date = $(".asset_sold_date").val();
    // net_buying_pric_val = $(".net_buying_pric_val").val()

    /* Profit/Lose */

    /* Type of Asset Sold */

    var cg_filter = capital_gain_list.filter((val, index) => {
        return val.asset == type_of_asset_sold_val;
    });

    var cg_date1 = new Date(asset_bought_date);
    var cg_date2 = new Date(asset_sold_date);

    // To calculate the time difference of two dates
    var Difference_In_Time = cg_date2.getTime() - cg_date1.getTime();

    // To calculate the no. of days between two dates
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

    //To display the final no. of days (result)
    // console.log(Difference_In_Days);
    // console.log(cg_filter[0].Long_Term * 365, Difference_In_Days);

    if (selling_price_val != "") {
        $(".valid_s_p").css("display", "none");
        if (selling_price_val != 0) {
            $(".valid_s_p_f0").css("display", "none");

            if (net_buying_price != "") {
                $(".valid_buy_d").css("display", "none");

                if (net_buying_price != 0) {
                    $(".valid_buy_d_f0").css("display", "none");

                    if (asset_bought_date != "") {
                        $(".valid_a_b_d").css("display", "none");
                        if (asset_sold_date != "") {
                            $(".valid_a_s_d").css("display", "none");

                            if (
                                Difference_In_Days == 0 ||
                                Difference_In_Days > 0
                            ) {
                                $(".valid_a_s_d").css("display", "none");

                                if (
                                    cg_filter[0].Long_Term * 365 >
                                        Difference_In_Days ||
                                    cg_filter[0].Long_Term * 365 ==
                                        Difference_In_Days
                                ) {
                                    cg_profit =
                                        selling_price_val - net_buying_price;
                                    $(".cg_p_l").text(cg_profit);
                                    $(".long_short_term").text("Short Term");
                                    if (cg_filter[0].Short_term_Tax == 15) {
                                        $(".eff_tax_rate").text(
                                            cg_filter[0].Short_term_Tax + "%"
                                        );
                                        var long_tax =
                                            cg_profit *
                                            (cg_filter[0].Short_term_Tax / 100);
                                        $(".cg_tax_payable").text(
                                            long_tax.toFixed(2)
                                        );
                                    } else {
                                        $(".eff_tax_rate").text(
                                            cg_filter[0].Short_term_Tax
                                        );
                                    }
                                } else if (
                                    cg_filter[0].Long_Term * 365 <
                                    Difference_In_Days
                                ) {
                                    cg_profit =
                                        selling_price_val - net_buying_price;
                                    $(".cg_p_l").text(cg_profit);
                                    $(".long_short_term").text("Long Term");
                                    $(".eff_tax_rate").text(
                                        cg_filter[0].Long_Term_Tax + "%"
                                    );
                                    var long_tax =
                                        cg_profit *
                                        (cg_filter[0].Long_Term_Tax / 100);
                                    $(".cg_tax_payable").text(
                                        long_tax.toFixed(2)
                                    );
                                }
                            } else {
                                $(".v_a_s_date").text(
                                    "The asset sold date can't be before the asset bought date"
                                );
                                $(".valid_a_s_d").css("display", "block");
                            }
                        } else {
                            $(".v_a_s_date").text(
                                "Please enter asset sold date"
                            );
                            $(".valid_a_s_d").css("display", "block");
                        }
                    } else {
                        $(".valid_a_b_d").css("display", "block");
                    }
                } else {
                    $(".valid_buy_d").css("display", "none");
                    $(".valid_buy_d_f0").css("display", "block");
                }
            } else {
                $(".valid_buy_d_f0").css("display", "none");
                $(".valid_buy_d").css("display", "block");
            }
        } else {
            $(".valid_s_p").css("display", "none");
            $(".valid_s_p_f0").css("display", "block");
        }
    } else {
        $(".valid_s_p_f0").css("display", "none");
        $(".valid_s_p").css("display", "block");
    }
}

/* 
  *********************************
   Loan Section
  *********************************
*/

/* 
  *********************************
   For Toggle
  *********************************
*/

function togg_mob_snav() {
    $(".snav_dn").toggle(function () {});
}

/* 
  *******************
    RD CALCULATOR  
  *******************
*/

var rd_p = "";
var rd_i = "";
var rd_n = "";

$(".rd_deposit_am_range").change(() => {
    rd_p = $(".rd_deposit_am_range").val();
    $(".rd_deposit_a").val(rd_p);
});

$(".rd_intrest_range").change(() => {
    rd_i = $(".rd_intrest_range").val();
    $(".rd_rate_intrest").val(rd_i);
});

$(".rd_time_period_range").change(() => {
    rd_n = $(".rd_time_period_range").val();
    $(".rd_time_period").val(rd_n);
});

$(".rdtoggle").change(() => {
    rd_y_m = $(".rdtoggle:checked").val();

    if (rd_y_m == "Year") {
        $(".for_y_m").text("1 Year");
        $(".for_ys_ms").text("50 Years");
    } else if (rd_y_m == "Month") {
        $(".for_y_m").text("1 Month");
        $(".for_ys_ms").text("600 Months");
    }
});

$("#calculate_rd_btn").click(function () {
    rd_p = $(".rd_deposit_a").val();
    rd_i = $(".rd_rate_intrest").val();
    rd_n = $(".rd_time_period").val();
    rd_y_m = $(".rdtoggle:checked").val();

    var RDdate = new Date();

    if (rd_p != "") {
        $(".rd_deposit_am_v").css("display", "none");
        if (rd_p > 0) {
            $(".rd_deposit_am_v").css("display", "none");

            if (rd_p < 100000001) {
                $(".rd_deposit_am_v").css("display", "none");

                if (rd_i != "") {
                    $(".rd_intrest_r_v").css("display", "none");
                    if (rd_i > 0) {
                        $(".rd_intrest_r_v").css("display", "none");
                        if (rd_i < 51) {
                            $(".rd_intrest_r_v").css("display", "none");

                            if (rd_n != "") {
                                $(".rd_time_p_v").css("display", "none");

                                if (rd_y_m == "Year") {
                                    if (rd_n > 0) {
                                        $(".rd_time_p_v").css(
                                            "display",
                                            "none"
                                        );

                                        if (rd_n < 51) {
                                            $(".rd_time_p_v").css(
                                                "display",
                                                "none"
                                            );

                                            $(".rd_maturty_d").text(
                                                RDdate.getDate() +
                                                    "/" +
                                                    (RDdate.getMonth() + 1) +
                                                    "/" +
                                                    (RDdate.getFullYear() +
                                                        Number(rd_n))
                                            );

                                            $(".rd_text_y_m").text(
                                                rd_n + " years,"
                                            );

                                            var inmonth = rd_n * 12;

                                            var f = Math.pow(
                                                1 + rd_i / 400,
                                                inmonth / 3
                                            );
                                            var d = Math.pow(
                                                1 + rd_i / 400,
                                                -1 / 3.0
                                            );
                                            var m = (rd_p * (f - 1)) / (1 - d);

                                            $(".rd_m_value").text(
                                                "₹ " + m.toFixed(2)
                                            );

                                            var total_inv = rd_p * inmonth;
                                            $(".rd_da").text(
                                                "₹ " + total_inv.toFixed(2)
                                            );

                                            var est_ret = m - total_inv;
                                            $(".rd_invest").text(
                                                "₹ " + est_ret.toFixed(2)
                                            );
                                        } else {
                                            $(".rd_valid_f0_10").text(
                                                " less than 51 years"
                                            );
                                            $(".rd_time_p_v").css(
                                                "display",
                                                "block"
                                            );
                                        }
                                    } else {
                                        $(".rd_valid_f0_10").text(
                                            " greater than 0 year"
                                        );
                                        $(".rd_time_p_v").css(
                                            "display",
                                            "block"
                                        );
                                    }
                                } else if (rd_y_m == "Month") {
                                    if (rd_n > 0) {
                                        $(".rd_time_p_v").css(
                                            "display",
                                            "none"
                                        );

                                        if (rd_n < 601) {
                                            $(".rd_time_p_v").css(
                                                "display",
                                                "none"
                                            );

                                            var matuarity_RDdate = new Date();
                                            var a = matuarity_RDdate.setMonth(
                                                RDdate.getMonth() + rd_n
                                            );
                                            // $(".deposit_date_s").text(
                                            //   fddate.getDate() +
                                            //     "/" +
                                            //     (fddate.getMonth() + 1) +
                                            //     "/" +
                                            //     fddate.getFullYear()
                                            // );
                                            $(".rd_maturty_d").text(
                                                matuarity_RDdate.getDate() +
                                                    "/" +
                                                    (matuarity_RDdate.getMonth() +
                                                        1) +
                                                    "/" +
                                                    matuarity_RDdate.getFullYear()
                                            );

                                            $(".rd_text_y_m").text(
                                                rd_n + " months,"
                                            );

                                            var inmonth = rd_n;

                                            var f = Math.pow(
                                                1 + rd_i / 400,
                                                inmonth / 3
                                            );
                                            var d = Math.pow(
                                                1 + rd_i / 400,
                                                -1 / 3.0
                                            );
                                            var m = (rd_p * (f - 1)) / (1 - d);

                                            $(".rd_m_value").text(
                                                "₹ " + m.toFixed(2)
                                            );

                                            var total_inv = rd_p * inmonth;
                                            $(".rd_da").text(
                                                "₹ " + total_inv.toFixed(2)
                                            );

                                            var est_ret = m - total_inv;
                                            $(".rd_invest").text(
                                                "₹ " + est_ret.toFixed(2)
                                            );
                                        } else {
                                            $(".rd_valid_f0_10").text(
                                                " less than 601 months"
                                            );
                                            $(".rd_time_p_v").css(
                                                "display",
                                                "block"
                                            );
                                        }
                                    } else {
                                        $(".rd_valid_f0_10").text(
                                            " greater than 0 month"
                                        );
                                        $(".rd_time_p_v").css(
                                            "display",
                                            "block"
                                        );
                                    }
                                }
                            } else {
                                $(".rd_valid_f0_10").text("");
                                $(".rd_time_p_v").css("display", "block");
                            }
                        } else {
                            $(".rd_v_f0_10").text(" less than 51%");
                            $(".rd_intrest_r_v").css("display", "block");
                        }
                    } else {
                        $(".rd_v_f0_10").text(" greater than 0%");
                        $(".rd_intrest_r_v").css("display", "block");
                    }
                } else {
                    $(".rd_v_f0_10").text("");
                    $(".rd_intrest_r_v").css("display", "block");
                }
            } else {
                $(".rd_d_valid").text("less than 100000001 ");
                $(".rd_deposit_am_v").css("display", "block");
            }
        } else {
            $(".rd_d_valid").text("greater than 0 ");
            $(".rd_deposit_am_v").css("display", "block");
        }
    } else {
        $(".rd_d_valid").text("");
        $(".rd_deposit_am_v").css("display", "block");
    }
});

/* 
  *********************************
    Personal Loan EMI CALCULATOR  
  *********************************
*/

var Pl_P_emi = "";
var Pl_E_emi = "";
var Pl_R_emi = "";
var Pl_N_emi = "";
var emi_mon_y;
var emi_int;
var totalamount;
var Emi_w;
var for_min_emi_y;
var for_min_emi_m;
var f100_emi_y;
var f100_emi_m;

$(".pl_deposit_am").change(function () {
    Pl_P_emi = Number($(".pl_deposit_am").val());
    $("#emi_loan_a_range").val(Pl_P_emi);
});

$(".pl_deposit_am_range").change(function () {
    Pl_P_emi = Number($(".pl_deposit_am_range").val());
    $(".pl_deposit_am").val(Pl_P_emi);
});

$(".pl_rate_intrest").change(function () {
    Pl_R_emi = Number($(".pl_rate_intrest").val());
    $("#emi_amount_range").val(Pl_R_emi);
});
$(".pl_rate_intrest_range").change(function () {
    Pl_R_emi = Number($(".pl_rate_intrest_range").val());
    $(".pl_rate_intrest").val(Pl_R_emi);
});

$(".pl_time_period").change(function () {
    Pl_N_emi = Number($(".pl_time_period").val());
    $(".pl_time_period_range").val(Pl_N_emi);
});

$(".pl_time_period_range").change(function () {
    Pl_N_emi = Number($(".pl_time_period_range").val());
    $(".pl_time_period").val(Pl_N_emi);
});

$(".pltoggle").change(function () {
    emi_mon_y = $(".pltoggle:checked").val();
    if (emi_mon_y === "Year") {
        $(".check_emi_my_s").text(1 + " Year");
        $(".check_emi_my_g").text(50 + " Year");
    } else if (emi_mon_y === "Month") {
        $(".check_emi_my_s").text(1 + " Month");
        $(".check_emi_my_g").text(600 + " Month");
    }
});
emi_mon_y = $(".pltoggle:checked").val();


function calculateplemi() {
    if (Pl_P_emi != "") {
        $(".lap_err").css("display", "none");
        if (Pl_P_emi > 0 || Pl_P_emi != 0) {
            $(".lap_err").css("display", "none");

            if (Pl_P_emi < 100000000) {
                $(".lap_err").css("display", "none");

                if (Pl_R_emi != "") {
                    $(".lap_r_err").css("display", "none");
                    if (Pl_R_emi > 0 || Pl_R_emi != 0) {
                        $(".lap_r_err").css("display", "none");

                        if (Pl_R_emi < 51) {
                            $(".lap_r_err").css("display", "none");

                            if (Pl_N_emi != "") {
                                $(".lap_f_t").css("display", "none");
                                if (Pl_N_emi > 0 || Pl_N_emi != 0) {
                                    $(".lap_f_t").css("display", "none");

                                    if (Pl_N_emi < 51) {
                                        $(".lap_f_t").css("display", "none");

                                        if (emi_mon_y == "Year") {
                                            var inmonth = Number(Pl_N_emi * 12);
                                            var rateofintrest = Number(
                                                Pl_R_emi / 12 / 100
                                            );
                                            var r = Number(1 + rateofintrest);

                                            var emi =
                                                (Number(Pl_P_emi) *
                                                    rateofintrest *
                                                    Math.pow(
                                                        1 + rateofintrest,
                                                        inmonth
                                                    )) /
                                                (Math.pow(
                                                    1 + rateofintrest,
                                                    inmonth
                                                ) -
                                                    1);

                                            /* For EMI  */

                                            $(".pl_monthly_emi_res").text(
                                                "₹ " + emi.toFixed(2)
                                            );

                                            //  console.log("m_emi",monthly_emi);

                                            /* Total_Intrest */

                                            var pl_intrest_am =
                                                Number(emi) * inmonth;
                                            $(".pl_total_int_emi_res").text(
                                                "₹ " +
                                                    (
                                                        pl_intrest_am - Pl_P_emi
                                                    ).toFixed(2)
                                            );

                                            /* Total Amount */
                                            var total_pay = Number(
                                                pl_intrest_am + P_emi
                                            );

                                            $(".pl_total_am_emi_res").text(
                                                "₹ " + total_pay.toFixed(2)
                                            );
                                        } else if (emi_mon_y == "Month") {
                                            var inmonth = Number(Pl_N_emi);
                                            var rateofintrest = Number(
                                                Number(Pl_R_emi) / 12 / 100
                                            );
                                            var r = Number(1 + rateofintrest);

                                            var emi =
                                                (Number(Pl_P_emi) *
                                                    rateofintrest *
                                                    Math.pow(
                                                        1 + rateofintrest,
                                                        inmonth
                                                    )) /
                                                (Math.pow(
                                                    1 + rateofintrest,
                                                    inmonth
                                                ) -
                                                    1);

                                            /* For EMI  */

                                            $(".pl_monthly_emi_res").text(
                                                "₹ " + emi.toFixed(2)
                                            );

                                            //  console.log("m_emi",monthly_emi);

                                            /* Total_Intrest */

                                            var pl_intrest_am =
                                                Number(emi) * inmonth;
                                            $(".pl_total_int_emi_res").text(
                                                "₹ " +
                                                    (
                                                        pl_intrest_am - Pl_P_emi
                                                    ).toFixed(2)
                                            );

                                            /* Total Amount */

                                            var total_pay = Number(
                                                pl_intrest_am + P_emi
                                            );

                                            $(".pl_total_am_emi_res").text(
                                                "₹ " + total_pay.toFixed(2)
                                            );
                                        }
                                    } else {
                                        $(".lap_tp_c").text(
                                            "less than 31 year"
                                        );
                                        $(".lap_f_t").css("display", "block");
                                    }
                                } else {
                                    $(".lap_tp_c").text("greater than 14 year");
                                    $(".lap_f_t").css("display", "block");
                                }
                            } else {
                                $(".lap_tp_c").text("");
                                $(".lap_f_t").css("display", "block");
                            }
                        } else {
                            $(".lap_ir_c").text("less than 51%");
                            $(".lap_r_err").css("display", "block");
                        }
                    } else {
                        $(".lap_ir_c").text("greater than 0%");
                        $(".lap_r_err").css("display", "block");
                    }
                } else {
                    $(".lap_ir_c").text("");
                    $(".lap_r_err").css("display", "block");
                }
            } else {
                $(".lap_f_g").text("less than ₹ 100000001");
                $(".lap_err").css("display", "block");
            }
        } else {
            $(".lap_err").css("display", "block");
            $(".lap_f_g").text("greater than ₹ 0");
        }
    } else {
        $(".lap_f_g").text("");
        $(".lap_err").css("display", "block");
    }
}
