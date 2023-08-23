

use axum::{Router};

pub(crate) fn mount ()-> Arc<Router>{
    Router::new().route("/getIncome",get())
}