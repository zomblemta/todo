use std::sync::Arc;

use axum::{Extension, Router};
use prisma_client_rust::PrismaClient;

pub mod api;

pub struct Node {}

impl Node {
    pub async fn new() -> (Arc<Node>, Router) {
        let db = Arc::new(PrismaClient::_builder().build().await.unwrap());

        (Node {}.into(), api::mount(Extension(db)).into())
    }
}
