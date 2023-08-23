use prisma_client_rust::PrismaClient;

use crate::api;

pub mod api;

pub struct Node {
}


impl  Node {
    pub fn new(self) {
        ok(({},router))
    }
    
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn it_works() {
        let result = add(2, 2);
        assert_eq!(result, 4);
    }
}
