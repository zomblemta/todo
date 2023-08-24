
use std::sync::Arc;

use axum::{
    http::StatusCode,
    routing::get,
    Json, Router, Extension,
};
use prisma_client_rust::PrismaClient;

type Database = Extension<Arc<PrismaClient>>;

pub async fn get_income(db: Database) -> (StatusCode, Json<String>) {

    (StatusCode::OK, Json(String::from("hello world")))
}

pub(crate) fn mount(db: Database) -> Router {
    Router::new().route("/getIncome", get(get_income))
}
