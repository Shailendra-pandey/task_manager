import Jwt from "jsonwebtoken";

const value = "Nest";

class JwtService {
    static sign(payload, expiry = "3600s", secret = value) {
        return Jwt.sign(payload, secret, { expiresIn: expiry })
    }

    static verify(token, secret = value) {
        return Jwt.verify(token, secret)
    }
}

export default JwtService;