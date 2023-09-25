
use std::sync::Arc;

use axum::{
    http::StatusCode,
    routing::get,
    Json, Router, Extension,
};
use prisma_client_rust::{PrismaClient, NewClientError};


pub async fn get_income(db) -> (StatusCode, Json<String>) {

    (StatusCode::OK, Json(String::from("hello world")))
}

pub(crate) fn mount(db) -> Router {
    Router::new().route("/getIncome", get(get_income))
}
