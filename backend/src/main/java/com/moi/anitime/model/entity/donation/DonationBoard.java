package com.moi.anitime.model.entity.donation;

import com.moi.anitime.model.entity.member.ShelterMember;
import lombok.*;
import lombok.experimental.SuperBuilder;

import javax.persistence.*;
import java.time.LocalDateTime;

//@Entity(name = "donationboard")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@ToString
@NamedNativeQueries({
        @NamedNativeQuery(
                name = "updateAttainAmountByBoardNo",
                query = "UPDATE DonationBoard SET attainAmount = (" +
                        "SELECT sum(donateAmount) FROM Donation WHERE boardNo = :boardNo" +
                        ") WHERE boardNo = :boardNo"
        )
})
public class DonationBoard {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "boardno")
    private int boardNo;        // int NOT NULL AUTO_INCREMENT,
    @Column(name = "shelterno")
    private int shelterNo;
    @ManyToOne
    @JoinColumn(name = "shelterno")
    private ShelterMember shelter;      // int NOT NULL,
    private String image1;      // varchar(255) COLLATE utf8mb4_bin NOT NULL COMMENT '썸네일용 이미지로 필수',
    private String title;       // varchar(100) COLLATE utf8mb4_bin DEFAULT NULL,
    @Column(name = "goalamount")
    private int goalAmount;     // int DEFAULT NULL,
    @Column(name = "attainamount")
    private int attainAmount;   // int DEFAULT NULL,
    @Column(name = "startat")
    private LocalDateTime startAt;  // datetime DEFAULT NULL,
    @Column(name = "endat")
    private LocalDateTime endAt;    // datetime DEFAULT NULL,
    @Column(name = "deleteat")
    private LocalDateTime deleteAt; // datetime DEFAULT NULL,
    private String poster;      // varchar(255) COLLATE utf8mb4_bin DEFAULT NULL,
}
