<!DOCTYPE html>
<html>
<head>
    <title>Booking Confirmation</title>
</head>
<body>
    <h1>Thank you for your booking!</h1>
    <p>Your {{ ucfirst($bookingType) }} booking has been successfully completed. Here are your booking details:</p>

    @if($bookingType == 'flight')
        <ul>
            
            <li>Departure: {{ $bookingDetails['departure'] }}</li>
            
        </ul>
    @elseif($bookingType == 'car')
        <ul>
            <!-- <li>Booking ID: {{ $bookingDetails['id'] }}</li> -->
            <li>Car ID: {{ $bookingDetails['car_id'] }}</li>
            <!-- <li>Pickup Location: {{ $bookingDetails['pickup_location'] }}</li> -->
            <!-- <li>Drop-off Location: {{ $bookingDetails['dropoff_location'] }}</li> -->
            <!-- <li>Start Date: {{ $bookingDetails['start_date'] }}</li> -->
            <!-- <li>End Date: {{ $bookingDetails['end_dates'] }}</li> -->
            <!-- <li>Driver Name: {{ $bookingDetails['driver_name'] }}</li> -->
        </ul>
    @elseif($bookingType == 'hotel')
        <ul>
            <!-- <li>Booking ID: {{ $bookingDetails['id'] }}</li> -->
            <li>Hotel ID: {{ $bookingDetails['hotel_id'] }}</li>
            <!-- <li>Check-in Date: {{ $bookingDetails['checkin_date'] }}</li> -->
            <!-- <li>Check-out Date: {{ $bookingDetails['checkout_date'] }}</li> -->
            <!-- <li>Guest Name: {{ $bookingDetails['guest_name'] }}</li> -->
            <!-- <li>Room Type: {{ $bookingDetails['room_type'] }}</li> -->
        </ul>
    @endif

    <p>We look forward to serving you!</p>
</body>
</html>
