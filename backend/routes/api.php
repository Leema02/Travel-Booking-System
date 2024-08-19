<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\UserController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::middleware('auth:sanctum')->group(function () {

    //login
});
// هدول لازم ننقلهم جوا ال auth بس تجهز صفحة ال login

// اضافة تعليق حسب رقم السيارة..الخ(والمفروض داخل الفنكشن ننادي auth::id عشان نجيب مننهم user عشان نوصل لل book ونربط كلشي تمام
// addCarReview  معمول تعليق لشرح هذالشيئ داخل

Route::post('/cars/{carId}/reviews', [ReviewController::class, 'addCarReview']);
Route::post('/flights/{flightId}/reviews', [ReviewController::class, 'addFlightReview']);
Route::post('/hotels/{hotelId}/reviews', [ReviewController::class, 'addHotelReview']);

// تعديل التعليق
Route::put('/reviews/cars/{reviewId}', [ReviewController::class, 'updateCarReview']);
Route::put('/reviews/flights/{reviewId}', [ReviewController::class, 'updateFlightReview']);
Route::put('/reviews/hotels/{reviewId}', [ReviewController::class, 'updateHotelReview']);

// حذف التعليق
Route::delete('/Delete/reviews/cars/{reviewId}', [ReviewController::class, 'deleteCarReview']);
Route::delete('/Delete/reviews/flights/{reviewId}', [ReviewController::class, 'deleteFlightReview']);
Route::delete('/Delete/reviews/hotels/{reviewId}', [ReviewController::class, 'deleteHotelReview']);

//
Route::get('/reviews/cars/{carId}/AvgAndCount', [ReviewController::class, 'getCarReviewStats']);

Route::get('/reviews/flights/{flightId}/AvgAndCount', [ReviewController::class, 'getFlightReviewStats']);

Route::get('/reviews/hotels/{hotelId}/AvgAndCount', [ReviewController::class, 'getHotelReviewStats']);

//get user and comment and reviews
Route::get('/cars/{carId}/userreviews', [ReviewController::class, 'getCarReviews']);

Route::get('/hotels/{hotelId}/userreviews', [ReviewController::class, 'getHotelReviews']);

Route::get('/flights/{flightId}/userreviews', [ReviewController::class, 'getFlightReviews']);
// end
// get detalaes for {car / }
Route::get('/reviews/cars/stats', [ReviewController::class, 'getAllCarReviewStats']);
Route::get('/reviews/flight/stats', [ReviewController::class, 'getAllFlightReviewStats']);
Route::get('/reviews/hotel/stats', [ReviewController::class, 'getAllHotelReviewStats']);

Route::post('/users/register', [UserController::class, 'store']);

// Flight APIs
Route::prefix('flights')->group(function () {
    Route::get('/search/all' , '\App\Http\Controllers\FlightController@searchAll');
    Route::get('/search/{from}/{to}/{departure}' , '\App\Http\Controllers\FlightController@search');
    Route::get('/search/booking/' , '\App\Http\Controllers\FlightController@searchBooking');
    Route::get('/search/review/' , '\App\Http\Controllers\FlightController@searchReview');

    Route::post('/book/' , '\App\Http\Controllers\FlightController@addBookingFlight');
    Route::post('/review/' , '\App\Http\Controllers\FlightController@addReviewFlight');

    Route::put('/booking/edit/' , '\App\Http\Controllers\FlightController@editBookingFlight');
    Route::put('/review/edit' , '\App\Http\Controllers\FlightController@editReviewFlight');

    Route::delete('/booking/delete/' , '\App\Http\Controllers\FlightController@deleteBookingFlight');
    Route::delete('/review/delete/' , '\App\Http\Controllers\FlightController@deleteReviewFlight');
});

// Hotel APIs
Route::prefix('hotels')->group(function () {
    Route::get('/search/all' , '\App\Http\Controllers\HotelController@searchAll');
    Route::get('/search/{name}/{location}/{rating}' , '\App\Http\Controllers\HotelController@search');
    Route::get('/search/booking/' , '\App\Http\Controllers\HotelController@searchBooking');
    Route::get('/search/review/' , '\App\Http\Controllers\HotelController@searchReview');

    Route::post('/book/' , '\App\Http\Controllers\HotelController@addBookingHotel');
    Route::post('/review/' , '\App\Http\Controllers\HotelController@addReviewHotel');

    Route::put('/booking/edit/' , '\App\Http\Controllers\HotelController@editBookingHotel');
    Route::put('/review/edit' , '\App\Http\Controllers\HotelController@editReviewHotel');

    Route::delete('/booking/delete/' , '\App\Http\Controllers\HotelController@deleteBookingHotel');
    Route::delete('/review/delete/' , '\App\Http\Controllers\HotelController@deleteReviewHotel');
});

//Car APIs
Route::prefix('cars')->group(function () {
    Route::get('/search/all' , '\App\Http\Controllers\CarController@searchAll');
    Route::get('/search/{brand}/{man_date}/{type}' , '\App\Http\Controllers\CarController@search');
    Route::get('/search/booking/' , '\App\Http\Controllers\CarController@searchBooking');
    Route::get('/search/review/' , '\App\Http\Controllers\CarController@searchReview');

    Route::post('/book/' , '\App\Http\Controllers\CarController@addBookingCar');
    Route::post('/review/' , '\App\Http\Controllers\CarController@addReviewCar');

    Route::put('/booking/edit/' , '\App\Http\Controllers\CarController@editBookingCar');
    Route::put('/review/edit' , '\App\Http\Controllers\CarController@editReviewCar');

    Route::delete('/booking/delete/' , '\App\Http\Controllers\CarController@deleteBookingCar');
    Route::delete('/review/delete/' , '\App\Http\Controllers\CarController@deleteReviewCar');
});








